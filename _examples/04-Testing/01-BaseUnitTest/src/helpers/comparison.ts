export type Fruit = {
  name: string;
  inStock: number;
};
export const buyFruit = (fruit: Fruit): Fruit => {
  return { ...fruit, inStock: fruit.inStock - 1 };
};
