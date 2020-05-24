import { browser, by, element } from 'protractor';

export class CartPage {
  navigateTo(): Promise<unknown> {
    return browser.get(`${browser.baseUrl}cart`) as Promise<unknown>;
  }

  navigateToTop(): Promise<void> {
    return element(by.linkText('My Store')).click() as Promise<void>;
  }

  checkout(): Promise<void> {
    return element(by.css('.material-icons')).click() as Promise<void>;
  }

  getHeaderText(): Promise<string> {
    return element(by.css('app-top-bar h1')).getText() as Promise<string>;
  }

  getPageTitleText(): Promise<string> {
    return element(by.css('app-cart h3')).getText() as Promise<string>;
  }

  getCartItemCount(): Promise<number> {
    return element.all(by.css('app-cart .cart-item')).count() as Promise<number>;
  }
}
