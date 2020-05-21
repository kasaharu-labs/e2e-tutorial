import { browser, by, element } from 'protractor';

export class ProductListPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getHeaderText(): Promise<string> {
    return element(by.css('app-top-bar h1')).getText() as Promise<string>;
  }

  getPageTitleText(): Promise<string> {
    return element(by.css('app-product-list h2')).getText() as Promise<string>;
  }

  getFirstProductName(): Promise<string> {
    return element.all(by.css('app-product-list div')).first().element(by.css('h3')).getText() as Promise<string>;
  }

  getLastProductName(): Promise<string> {
    return element.all(by.css('app-product-list div')).last().element(by.css('h3')).getText() as Promise<string>;
  }

  selectFirstProduct(): Promise<void> {
    return element.all(by.partialLinkText('Phone XL')).click() as Promise<void>;
  }
}
