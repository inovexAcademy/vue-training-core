import { Product } from '@/types/common';

export async function fetchProducts(quantity: number = 3): Promise<Product[]> {
  const res = await fetch(`https://dummyjson.com/products/?limit=${quantity}`);
  return res.json();
}

export function getProduct1(): Product {
  return {
    id: 1,
    title: 'Product 1',
    description: 'Description for Product 1',
    category: 'Category A',
    price: 29.99,
    discountPercentage: 10,
    rating: 4.5,
    stock: 100,
    tags: ['tag1', 'tag2'],
    brand: 'Brand X',
    sku: 'SKU12345',
    weight: 0.5,
    dimensions: { width: 10, height: 20, depth: 5 },
    warrantyInformation: '1 year warranty',
    shippingInformation: 'Ships in 3-5 business days',
    availabilityStatus: 'In Stock',
    reviews: [],
    returnPolicy: '30-day return policy',
    minimumOrderQuantity: 1,
    meta: {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      barcode: '1234567890123',
      qrCode: 'https://example.com/qr/1234567890123',
    },
    thumbnail: 'https://via.placeholder.com/150',
    images: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/200',
    ],
  };
}
export function getProduct2(): Product {
  return {
    id: 2,
    title: 'Product 2',
    description: 'Description for Product 2',
    category: 'Category B',
    price: 49.99,
    discountPercentage: 15,
    rating: 4.0,
    stock: 50,
    tags: ['tag3', 'tag4'],
    brand: 'Brand Y',
    sku: 'SKU67890',
    weight: 1.0,
    dimensions: { width: 15, height: 25, depth: 10 },
    warrantyInformation: '2 years warranty',
    shippingInformation: 'Ships in 5-7 business days',
    availabilityStatus: 'Limited Stock',
    reviews: [],
    returnPolicy: '14-day return policy',
    minimumOrderQuantity: 1,
    meta: {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      barcode: '0987654321098',
      qrCode: 'https://example.com/qr/0987654321098',
    },
    thumbnail: 'https://via.placeholder.com/150',
    images: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/200',
    ],
  };
}
