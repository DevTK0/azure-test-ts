# Azure Function Telegram Bot (TypeScript)

A minimal Telegram bot deployed as an Azure Function using GrammY.

## Setup

1. Install dependencies:
   ```
   pnpm install
   ```

2. Configure your bot token:
   - For local development, edit `local.settings.json`
   - For Azure, set the `BOT_TOKEN` environment variable in the Function App settings

3. Build the project:
   ```
   pnpm build
   ```

4. Set up the webhook (after deployment):
   ```
   pnpm setup-webhook
   ```

## Local Development

Run the Azure Functions emulator:
```
pnpm start
```

## Deployment

Deploy to Azure Functions using VS Code Azure extension or Azure Functions Core Tools.
