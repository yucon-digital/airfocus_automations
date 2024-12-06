# airfocus-automation

Kickstart your own [airfocus](http://airfocus.com/) automation handler with ease!

## Getting started

- Log into your airfocus account and create an API key in your account settings (API keys are only available in higher tier plans).
- Clone this repository.
- Run the following preparational steps:
  ```bash
  npm ci
  npm run init -- --name my-airfocus-automation
  cp .env.example .env
  # add correct values to .env file
  # SELF_BASE_URL: url under which the automation handler is reachable
  # SELF_AUTHORIZATION: Auth token for the automation handler, can be a random string
  # AIRFOCUS_BASE_URL: url of the airfocus API, e.g. https://app.airfocus.io/api/v1
  # AIRFOCUS_API_KEY: The API key for the airfocus API of the client you want to run the automations for
  # NGROK_AUTHTOKEN: (Optional, for local testing) Auth token for ngrok, can be obtained from https://dashboard.ngrok.com/get-started/setup
  ```
- Setup your desired automation handlers and the correspondant workspaceIds for your client. You can find the configuration [here](src/utils/handlerConfig.ts).
- Test locally by running (using [ngrok](https://ngrok.com/) to make your local instance available from the public internet):
  ```bash
  npm start
  ```
- Publish as container image by running:
  ```bash
  npm run build-docker
  ```
- Deploy and run on your server. Make sure that you make it reachable via HTTPS with a valid certificate, for example by using a reverse proxy and Let's encrypt.

## Disclaimer

This repository is only intended as template and comes with no support.
