import { By, Builder, Browser, WebDriver } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome.js';
import pkg from 'ts-assertions';
const { assert } = pkg;

async function firstTest() {
    const options = new Options();
    options.addArguments('--no-sandbox');
    
    const driver = await new Builder()
            .forBrowser(Browser.CHROME)
            .setChromeOptions(options)
            .build();

    try {
        await driver.get('https://www.selenium.dev/selenium/web/web-form.html');
        
        let title = await driver.getTitle();
        assert(title === "Web form", "Don`t assert title");

        await driver.manage().setTimeouts({implicit: 500});

        let textbox = await driver.findElement(By.name('my-text'));
        let submitButton = await driver.findElement(By.css('button'));

        await textbox.sendKeys('Selenium');
        await submitButton.click();

        let message = await driver.findElement(By.id('message'));
        let value = await message.getText();
        assert(value === "Received!", "Don`t assert message");
    } catch (e) {
        console.log(e)
    } finally {
        await driver.quit();
    }
}

firstTest();