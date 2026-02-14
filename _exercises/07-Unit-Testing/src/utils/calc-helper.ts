export const calcDiscountedPrice = (
  price: number,
  discountPercentage?: number,
) => {
  if (!discountPercentage || discountPercentage <= 0) return price;
  return Number.parseFloat((price * (1 - discountPercentage / 100)).toFixed(2));
};
