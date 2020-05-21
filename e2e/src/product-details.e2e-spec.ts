import { browser, logging, protractor } from 'protractor';
import { ProductDetailsPage } from './product-details.po';

describe('ProductDetails', () => {
  let productDetailsPage: ProductDetailsPage;

  beforeEach(() => {
    productDetailsPage = new ProductDetailsPage();
    productDetailsPage.navigateTo();
  });

  it('should display header text', () => {
    expect(productDetailsPage.getHeaderText()).toEqual('My Store');
  });

  it('should display page title text', () => {
    expect(productDetailsPage.getPageTitleText()).toEqual('Product Details');
  });

  it('should display product name', () => {
    expect(productDetailsPage.getProductName()).toEqual('Phone XL');
  });

  it('should display product price', () => {
    expect(productDetailsPage.getProductPrice()).toEqual('$799.00');
  });

  it('should display alert if buy the product', () => {
    productDetailsPage.buy();
    expect(productDetailsPage.getAlertDialogText()).toEqual('Your product has been added to the cart!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry),
    );
  });
});
