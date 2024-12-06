import { Server } from "./server/server";
import { signals } from "./utils/signals";
import { createConfig } from "./utils/createConfig";
import { AirFocusApiClient } from "./apiClient/airfocusApiClient";
import { createWebhookHandlers } from "./webhook/createWebhookHandlers";
import { handlerConfig } from "./utils/handlerConfig";

async function run() {
  const config = createConfig();
  const client = new AirFocusApiClient(config);

  const handlers = await createWebhookHandlers(config, client, handlerConfig);

  const server = new Server(8080, "0.0.0.0", config, handlers);
  await server.run();
  await signals(["SIGTERM", "SIGINT"]);
  await server.close();
  process.exit(0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
