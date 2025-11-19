
import {Product} from "../models/Product";

let taxRate: number;
export function calculateTax(product: Product): number{
    if(product.category ==="groceries"){
        taxRate = 3.00;
    }else{
        taxRate = 4.75;
    }
       let pricewithTax = product.price * (1 + taxRate / 100);
      return pricewithTax ;       
}