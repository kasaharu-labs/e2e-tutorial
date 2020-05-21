import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getHeaderText(): Promise<string> {
    return element(by.css('app-top-bar h1')).getText() as Promise<string>;
  }
}
