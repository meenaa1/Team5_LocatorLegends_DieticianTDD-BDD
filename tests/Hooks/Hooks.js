import { createBdd } from "playwright-bdd";
import { ContentType } from "allure-js-commons";
import * as allure from "allure-js-commons";
import logger from '../../utils/Logger.js';

const { Before, After } = createBdd();

Before(async ({ page }) => {
    // await page.goto(process.env.url);
    logger.info("Starting test: navigate to page")
    try {
        await page.goto(process.env.url);
    } catch (err) {
        logger.error(`Failed to navigate: ${err.message}`);
    }
})

After(async ({ page }) => {
    const screenshotBuffer = await page.screenshot();
    await allure.attachment("Team 5: Screenshot", screenshotBuffer, ContentType.PNG);

    console.log("End of Execution");
})