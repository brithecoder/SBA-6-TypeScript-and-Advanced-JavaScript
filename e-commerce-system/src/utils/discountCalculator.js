import * as customeErrors from "../utils/errorHandler.js";
export function discountCalculator(price, discountPercentage) {
    if (price < 0 || discountPercentage < 0) {
        throw new customeErrors.DataError("Price and discount percentage must be non-negative.");
    }
    const discountDeci = discountPercentage / 100;
    let discountAmount = price * discountDeci;
    return discountAmount;
}
//# sourceMappingURL=discountCalculator.js.map