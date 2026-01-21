import { Builder, Browser } from 'selenium-webdriver';
import { ServiceBuilder } from 'selenium-webdriver/chrome';

const service = new ServiceBuilder(require('chromedriver').path);

const driver = await new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeService(service)
    .build()
