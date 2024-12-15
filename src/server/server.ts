import bodyParser from "body-parser";
import express from "express";
import net from "net";

import packageJson from "../../package.json";
import { Handler } from "../models/handler";
import { Config } from "../models/config";
import { getLocalWebhookUrl } from "../webhook/utils";

export class Server {
  private app: express.Express;
  private serverInstance?: net.Server;

  constructor(
    private readonly port: number,
    private readonly hostname: string,
    config: Config,
    handlers: Handler[],
  ) {
    this.app = express();

    this.app.get("/", (req, res) => {
      return res.json({
        name: packageJson.name,
        version: packageJson.version,
        selfUrl: config.selfBaseUrl,
      });
    });

    for (const handler of handlers) {
      const handlerId = handler.getId();
      const workspaceId = handler.getWorkspaceId();

      const localWebhookUrl = getLocalWebhookUrl(handlerId, workspaceId);

      this.app.post(
        localWebhookUrl,
        bodyParser.json({ limit: "1mb" }),
        async (req, res, next) => {
          console.log(`${new Date().toISOString()} - Received event`);
          if (!req.headers.authorization) {
            return res.status(401).json({ error: "Missing authorization" });
          }
          if (
            req.headers.authorization !== `Bearer ${config.selfAuthorization}`
          ) {
            return res.status(403).json({ error: "Invalid authorization" });
          }
          try {
            const event = req.body;
            await handler.handle(event);
            return res.json({});
          } catch (err) {
            next(err);
          }
        },
      );
    }

    this.app.use(
      (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
      ) => {
        return res.status(404).json({
          error: "Not found",
        });
      },
    );

    this.app.use(
      (
        err: any,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
      ) => {
        console.error(err);
        return res.status(500).json({
          error: "Internal server error",
        });
      },
    );
  }

  async run(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.serverInstance = this.app
        .listen(this.port, this.hostname)
        .on("listening", () => {
          const { port } = this.serverInstance!.address() as net.AddressInfo;
          console.log(`Started listening on ${this.hostname}:${port}`);
          resolve();
        })
        .on("error", (error) => {
          console.error(
            `Listening on port ${this.hostname}:${this.port} failed`,
            {
              error,
            },
          );
          reject(error);
        });
    });
  }

  async close(): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      if (!this.serverInstance) {
        return resolve();
      }
      this.serverInstance.close((err) => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  }
}
