import { TotalPriceParams } from "./totalPrice.types"
import { applyDiscount, assertValidDiscount, assertValidMonths, assertValidPrice, roundToCents } from "./pricing.utils"

const totalPrice = (params: TotalPriceParams) => {
  const { price, discount = 0 } = params;

  assertValidPrice(price);
  assertValidDiscount(discount);

  const discountedTotal = applyDiscount(price, discount);

  if (params.isInstallment) {
    const { months } = params;
    assertValidMonths(months);
    return roundToCents(discountedTotal / months);
  }

  return roundToCents(discountedTotal);
}

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250