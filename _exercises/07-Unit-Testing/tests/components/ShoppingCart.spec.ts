import { expect, test } from '@playwright/experimental-ct-vue';
import ShoppingCart from '@/components/ShoppingCart.vue';

test.describe('ProductList', () => {
  test('should render', async ({ mount }) => {
    const component = await mount(ShoppingCart);

    await expect(component).toContainText('Shopping Cart');
  });
});
