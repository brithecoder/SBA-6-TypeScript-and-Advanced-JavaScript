
import * as customeErrors from "../utils/errorHandler";
export function discountCalculator(price: number, discountPercentage: number): number{
     if (price < 0 || discountPercentage < 0) {
        throw new customeErrors.DataError("Price and discount percentage must be non-negative.");
    }
  const discountDeci : number =  discountPercentage / 100;
        let  discountAmount: number = price * discountDeci;
        return discountAmount
}


