import { browser, logging } from 'protractor';
import { CartPage } from './cart.po';
import { ProductDetailsPage } from './product-details.po';
import { ProductListPage } from './product-list.po';

describe('Cart', () => {
  let cartPage: CartPage;

  beforeEach(() => {
    cartPage = new CartPage();
    cartPage.navigateTo();
  });

  it('should display header text', () => {
    expect(cartPage.getHeaderText()).toEqual('My Store');
  });

  it('should display page title text', () => {
    expect(cartPage.getPageTitleText()).toEqual('Cart');
  });

  it('should display item in cart', () => {
    // top page に移動
    cartPage.navigateToTop();

    // 1 つめの item を選択
    const productListPage = new ProductListPage();
    productListPage.selectFirstProduct();

    // 1 つめの item 購入
    const productDetailsPage = new ProductDetailsPage();
    productDetailsPage.buy();
    productDetailsPage.acceptAlertDialog();

    // cart に移動
    cartPage.checkout();

    expect(cartPage.getCartItemCount()).toBe(1);
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
