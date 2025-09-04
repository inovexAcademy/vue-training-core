export const calcDiscountedPrice = (price: number, discountPercentage: number): number => {
  if (discountPercentage <= 0) return price;
  return parseFloat(
    (price * (1 - discountPercentage / 100)).toFixed(2),
  );
};
