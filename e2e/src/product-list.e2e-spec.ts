import { browser, logging } from 'protractor';
import { ProductListPage } from './product-list.po';

describe('ProductList', () => {
  let productListPage: ProductListPage;

  beforeEach(() => {
    productListPage = new ProductListPage();
    productListPage.navigateTo();
  });

  it('should display header text', () => {
    expect(productListPage.getHeaderText()).toEqual('My Store');
  });

  it('should display page title text', () => {
    expect(productListPage.getPageTitleText()).toEqual('Products');
  });

  it('should display first product name', () => {
    expect(productListPage.getFirstProductName()).toEqual('Phone XL');
  });

  it('should display last product name', () => {
    expect(productListPage.getLastProductName()).toEqual('Phone Standard');
  });

  it('should navigate to product detail page', () => {
    productListPage.selectFirstProduct();
    expect(browser.getCurrentUrl()).toBe(`${browser.baseUrl}products/0`);
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
