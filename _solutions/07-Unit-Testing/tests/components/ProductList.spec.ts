import { expect, test } from '@playwright/experimental-ct-vue';
import ProductList from '@/components/ProductList.vue';

test.describe('ProductList', () => {
  test('should render', async ({ mount }) => {
    const component = await mount(ProductList);

    await expect(component).toContainText('Available Products');
  });
});
