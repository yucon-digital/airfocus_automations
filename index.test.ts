import "dotenv/config";

import { test } from "vitest";

import { Server } from "./src/server/server";
import { Handler } from "./src/models/handler";
import { Config } from "./src/models/config";

test("runs server", { timeout: 60_000 }, async () => {
  const config: Config = {
    selfBaseUrl: "http://127.0.0.1:0",
    selfAuthorization: "secret",
    airfocusBaseUrl: "https://api.airfocus.com",
    airfocusApiKey: "airfocus_ak_invalid",
  };

  const handlers: Handler[] = [];

  const server = new Server(8080, "0.0.0.0", config, handlers);
  await server.run();
  await server.close();
});
