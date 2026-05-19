export type Fruit = {
  name: string;
  bestBeforeDate: Date;
};
export const isExpired = (fruit: Fruit): boolean => {
  return fruit.bestBeforeDate < new Date();
};
