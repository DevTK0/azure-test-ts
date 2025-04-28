import {
    app,
    HttpRequest,
    HttpResponseInit,
    InvocationContext,
} from "@azure/functions";
import { Bot } from "gramio";

const bot = new Bot(process.env.BOT_TOKEN || "");

bot.command("start", async (ctx) => {
    await ctx.send("hello world");
});

async function run() {
    bot.start();
    bot.stop();
    return { body: "Hello, world!" };
}

// Register the Azure Function endpoint
app.http("telegram-webhook", {
    methods: ["POST"],
    authLevel: "anonymous",
    handler: run,
});
