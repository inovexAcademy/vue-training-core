import ShoppingCart from '@/components/ShoppingCart.vue';
import { expect, MountResultJsx, test } from '@playwright/experimental-ct-vue';
import { mockProducts } from '@tests/mocks/products';

test.describe('ShoppingCart', () => {
  test('should render', async ({ mount }) => {
    const component = await mount(ShoppingCart);

    await expect(component).toBeVisible();
  });

  // Given
  test.describe('given the shopping cart is empty', () => {
    let component: MountResultJsx;
    test.beforeEach(async ({ mount }) => {
      component = await mount(ShoppingCart, {
        hooksConfig: {
          store: {
            cartItems: [],
          },
        },
      });
    });

    // Then
    test('then it should not display any products', async () => {
      await expect(
        component.getByTestId('product-list-item'),
      ).not.toBeVisible();
    });

    test('then the total price should be 0', async () => {
      await expect(component).toContainText('Total price: 0.00 $');
    });
  });

  // Given
  test.describe('given the shopping cart has products', () => {
    let component: MountResultJsx;
    test.beforeEach(async ({ mount }) => {
      component = await mount(ShoppingCart, {
        hooksConfig: {
          store: {
            cartItems: [
              { product: mockProducts[0], quantity: 2 },
              { product: mockProducts[1], quantity: 1 },
            ],
          },
        },
      });
    });

    // Then
    test('then it should display the products', async () => {
      await expect(component).toContainText(mockProducts[0]!.title);
      await expect(component).toContainText(mockProducts[1]!.title);
    });

    test('then the total price should be correct', async () => {
      /* Calculated as:
      Product 0: 29.99 - 10% = 26.991 * 2 = 53.982
      Product 1: 49.99 - 15% = 42.4915 * 1 = 42.4915
      Total: 53.982 + 42.4915 = 96.4735 -> 96.47
      */
      await expect(component).toContainText('Total price: 96.47 $');
    });
  });
});
