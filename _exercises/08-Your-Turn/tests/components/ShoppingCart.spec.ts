import ShoppingCart from '@/components/ShoppingCart.vue';
import { expect, test } from '@playwright/experimental-ct-vue';
import { mockProducts } from '@tests/mocks/products';

test.describe('ShoppingCart', () => {
  test('should render', async ({ mount }) => {
    const component = await mount(ShoppingCart);

    await expect(component).toBeVisible();
  });

  // Given
  test.describe('given the shopping cart is empty', () => {
    // Then
    test('then it should not display any products', async ({ mount }) => {
      const component = await mount(ShoppingCart, {
        hooksConfig: {
          store: {
            cartItems: [],
          },
        },
      });

      await expect(
        component.getByTestId('product-list-item'),
      ).not.toBeVisible();
    });
    test('then the total price should be 0', async ({ mount }) => {
      const component = await mount(ShoppingCart, {
        hooksConfig: {
          store: {
            cartItems: [],
          },
        },
      });

      await expect(component).toContainText('Total price: 0.00 $');
    });
  });

  // Given
  test.describe('given the shopping cart has products', () => {
    // Then
    test('then it should display the products', async ({ mount }) => {
      const component = await mount(ShoppingCart, {
        hooksConfig: {
          store: {
            cartItems: [
              { product: mockProducts[0], quantity: 2 },
              { product: mockProducts[1], quantity: 1 },
            ],
          },
        },
      });

      await expect(component).toContainText(mockProducts[0].title);
      await expect(component).toContainText(mockProducts[1].title);
    });
    test('then the total price should be correct', async ({ mount }) => {
      const component = await mount(ShoppingCart, {
        hooksConfig: {
          store: {
            cartItems: [
              { product: mockProducts[0], quantity: 2 },
              { product: mockProducts[1], quantity: 1 },
            ],
          },
        },
      });

      /* Calculated as:
      Product 0: 29.99 - 10% = 26.991 * 2 = 53.982
      Product 1: 49.99 - 15% = 42.4915 * 1 = 42.4915
      Total: 53.982 + 42.4915 = 96.4735 -> 96.47
      */
      await expect(component).toContainText('Total price: 96.47 $');
    });
  });
});
