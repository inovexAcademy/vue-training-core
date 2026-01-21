import { expect, test } from '@playwright/experimental-ct-vue';
import ShoppingCart from '@/components/ShoppingCart.vue';
import type { HooksConfig } from '../../playwright/index';
import { mockProducts } from '@tests/mocks/products';

test.describe('ShoppingCart', () => {
  test('should render', async ({ mount }) => {
    const component = await mount(ShoppingCart);

    await expect(component).toContainText('Shopping Cart');
  });

  test('should render with items in cart', async ({ mount }) => {
    const component = await mount<HooksConfig>(ShoppingCart, {
      hooksConfig: {
        store: {
          _cartItems: [
            {
              product: mockProducts[0],
              quantity: 1,
            },
          ],
        },
      },
    });

    await expect(component).toContainText('Product 1');
  });
});
