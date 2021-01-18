import puppeteer from "https://deno.land/x/puppeteer@5.5.1/mod.ts";

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto("https://blakegreen.dev");
await page.screenshot({ path: "blake.png" });

await browser.close();