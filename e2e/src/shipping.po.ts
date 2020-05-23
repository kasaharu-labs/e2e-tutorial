import { $$, browser, by, element } from 'protractor';

export class ShippingPage {
  navigateTo(): Promise<unknown> {
    return browser.get(`${browser.baseUrl}shipping`) as Promise<unknown>;
  }

  getHeaderText(): Promise<string> {
    return element(by.css('app-top-bar h1')).getText() as Promise<string>;
  }

  getPageTitleText(): Promise<string> {
    return element(by.css('app-shipping h3')).getText() as Promise<string>;
  }

  getFirstShippingPatternName(): Promise<string> {
    // NOTE: element.all(by.css()) -> $$()
    return $$('app-shipping div').first().$$('span').first().getText() as Promise<string>;
  }

  getLastShippingPatternName(): Promise<string> {
    return $$('app-shipping div').last().$$('span').first().getText() as Promise<string>;
  }

  getShippingPatternCount(): Promise<number> {
    return element.all(by.css('app-shipping div')).count() as Promise<number>;
  }
}
