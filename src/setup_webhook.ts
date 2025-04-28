import { Bot } from "gramio";

async function setupWebhook() {
    // Configuration
    const BOT_TOKEN = process.env.BOT_TOKEN || "YOUR_BOT_TOKEN";
    const WEBHOOK_URL =
        process.env.WEBHOOK_URL ||
        "https://your-function-app.azurewebsites.net/api/telegram-webhook";

    console.log("Setting up webhook...");
    const bot = new Bot(BOT_TOKEN);

    // Remove any existing webhook
    await bot.api.deleteWebhook();

    // Set new webhook
    await bot.api.setWebhook({
        url: WEBHOOK_URL,
    });

    // Verify webhook was set
    const webhookInfo = await bot.api.getWebhookInfo();
    console.log("Current webhook status:", webhookInfo);

    if (webhookInfo.url === WEBHOOK_URL) {
        console.log(`✅ Webhook was set successfully to URL: ${WEBHOOK_URL}`);
    } else {
        console.log("❌ Failed to set webhook correctly");
    }
}

// Run the setup
setupWebhook().catch(console.error);
