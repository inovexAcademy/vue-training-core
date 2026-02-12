import ProductCard from '@/components/ProductCard.vue';
import { expect, test } from '@playwright/experimental-ct-vue';

test.describe('ProductCard', () => {
  // Given
  test.describe('given the product does not have a discount', () => {
    // Then
    test('renders properly without discount', async ({ mount }) => {
      const component = await mount(ProductCard, {
        props: {
          id: 1,
          title: 'Test Product',
          description: 'This is a test product.',
          price: 9.99,
        },
      });

      await expect(component).not.toContainText('1');
      await expect(component).toContainText('Test Product');
      await expect(component).toContainText('This is a test product.');
      await expect(component).toContainText('Price: 9.99 $');
      await expect(component).toContainText('Add to cart');
    });
  });

  // Given
  test.describe('given the product has a discount', () => {
    // Then
    test('renders properly with discount', async ({ mount }) => {
      const component = await mount(ProductCard, {
        props: {
          id: 1,
          title: 'Test Product',
          description: 'This is a test product.',
          price: 9.99,
          discountPercentage: 10,
        },
      });

      await expect(component).not.toContainText('1');
      await expect(component).toContainText('Test Product');
      await expect(component).toContainText('This is a test product.');
      await expect(component).toContainText('Price: 9.99 $');
      await expect(component).toContainText('Discounted Price: 8.99 $');
      await expect(component).toContainText('Add to cart');
    });
  });

  //Given
  test.describe('given the user wants to add the product to the cart', () => {
    // When
    test.describe('when the user clicks the add to cart button', () => {
      // Then
      test('emits add-to-cart event on button click', async ({ mount }) => {
        let emittedEvent: number | null = null;
        const component = await mount(ProductCard, {
          props: {
            id: 1,
            title: 'Test Product',
            description: 'This is a test product.',
            price: 9.99,
          },
          on: {
            'add-to-cart': (id: number) => {
              emittedEvent = id;
            },
          },
        });

        const button = await component.getByRole('button', {
          name: 'Add to cart',
        });
        await button.click();
        expect(emittedEvent).toBe(1);
      });
    });
  });
});
