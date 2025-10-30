import { DISCOUNT_MAX, DISCOUNT_MIN, ROUND_PRECISION_CENTS } from "./pricing.constants";

const assertValidPrice = (price: number) => { 
	if (!Number.isFinite(price) || price < 0) {
		throw new Error("price должен быть неотрицательным числом");
	}
}

const assertValidDiscount = (discount: number) => {
	if (!Number.isFinite(discount) || discount < DISCOUNT_MIN || discount > DISCOUNT_MAX) {
		throw new Error("discount должен быть числом от 0 до 100");
	}
}

const assertValidMonths = (months: number) => {
	if (!Number.isInteger(months) || months <= 0) {
		throw new Error("months должен быть целым положительным числом");
	}
}

const applyDiscount = (total: number, discountPercent: number) => {
	return total * (1 - discountPercent / 100);
}

const roundToCents = (value: number) => {
	const factor = 10 ** ROUND_PRECISION_CENTS;
	return Math.round(value * factor) / factor;
}

export { assertValidPrice, assertValidDiscount, assertValidMonths, applyDiscount, roundToCents };