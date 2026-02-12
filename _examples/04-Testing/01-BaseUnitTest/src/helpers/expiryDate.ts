export type Fruit = {
  name: string;
  bestBeforeDate: Date;
};
export function isExpired(fruit: Fruit): boolean {
  return fruit.bestBeforeDate < new Date();
}
