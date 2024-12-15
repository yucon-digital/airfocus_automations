import "dotenv/config";
import ngrok from "@ngrok/ngrok";

import { Server } from "./src/server/server";
import { createConfig, readString } from "./src/config/createConfig";
import { AirFocusApiClient } from "./src/apiClient/airfocusApiClient";
import { signals } from "./src/utils/signals";
import { createWebhookHandlers } from "./src/webhook/createWebhookHandlers";
import { handlerConfig } from "./src/config/handlerConfig";

async function run() {
  const port = (process.env.PORT || 3000) as number;
  const ngrokListener = await ngrok.forward({
    addr: port,
    authtoken: readString("NGROK_AUTHTOKEN"),
  });

  const ngrokUrl = ngrokListener.url();

  if (!ngrokUrl) {
    throw new Error("Unable to retrieve ngrok URL");
  }

  console.log(`Exposing server on ${ngrokUrl}`);

  const config = createConfig({
    selfBaseUrl: ngrokUrl,
  });

  const client = new AirFocusApiClient(config);
  const handlers = await createWebhookHandlers(config, client, handlerConfig);
  const server = new Server(port, "127.0.0.1", config, handlers);
  await server.run();
  await signals(["SIGTERM", "SIGINT"]);
  await server.close();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
