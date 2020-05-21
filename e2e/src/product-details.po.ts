import { browser, by, element } from 'protractor';

export class ProductDetailsPage {
  navigateTo(): Promise<unknown> {
    return browser.get(`${browser.baseUrl}products/0`) as Promise<unknown>;
  }

  getHeaderText(): Promise<string> {
    return element(by.css('app-top-bar h1')).getText() as Promise<string>;
  }

  getPageTitleText(): Promise<string> {
    return element(by.css('app-product-details h2')).getText() as Promise<string>;
  }

  getProductName(): Promise<string> {
    return element(by.css('app-product-details h3')).getText() as Promise<string>;
  }

  getProductPrice(): Promise<string> {
    return element(by.css('app-product-details h4')).getText() as Promise<string>;
  }

  buy(): Promise<void> {
    return element(by.partialButtonText('Buy')).click() as Promise<void>;
  }

  getAlertDialogText(): Promise<string> {
    const alertDialog = browser.switchTo().alert();
    alertDialog.accept();
    return alertDialog.getText() as Promise<string>;
  }
}
