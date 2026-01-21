import { Builder, Browser } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome.js';
async function main() {
    const options = new Options();
    options.addArguments('--no-sandbox');
    const driver = await new Builder()
        .forBrowser(Browser.CHROME)
        .setChromeOptions(options)
        .build();
    try {
        await driver.get('https://www.selenium.dev/selenium/web/web-form.html');
        console.log('Page loaded');
        await driver.sleep(5000);
    }
    finally {
        await driver.quit();
    }
}
main();
