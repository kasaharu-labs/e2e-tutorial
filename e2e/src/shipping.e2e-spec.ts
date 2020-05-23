import { browser, logging } from 'protractor';
import { ShippingPage } from './shipping.po';

describe('Shipping', () => {
  let shippingPage: ShippingPage;

  beforeEach(() => {
    shippingPage = new ShippingPage();
    shippingPage.navigateTo();
  });

  it('should display header text', () => {
    expect(shippingPage.getHeaderText()).toEqual('My Store');
  });

  it('should display page title text', () => {
    expect(shippingPage.getPageTitleText()).toEqual('Shipping Prices');
  });

  it('should display first shipping pattern name', () => {
    expect(shippingPage.getFirstShippingPatternName()).toEqual('Overnight');
  });

  it('should display last shipping pattern name', () => {
    expect(shippingPage.getLastShippingPatternName()).toEqual('Postal');
  });

  it('should display shipping pattern count', () => {
    expect(shippingPage.getShippingPatternCount()).toBe(3);
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
