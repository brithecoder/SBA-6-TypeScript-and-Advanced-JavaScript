import { discountCalculator } from "../utils/discountCalculator.js";
import { calculateTax } from "../utils/taxCalculator.js";


export class Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  imageUrl: string;
  

  constructor(id: number, title: string, description:string, category: string,  price: number, discountPercentage: number, imageUrl: string){
      
  this.id = id;
  this.title = title;
  this.description = description;
  this.category = category;
  this.price = price;
  this.discountPercentage = discountPercentage;
  this.imageUrl = imageUrl;
  }
   displayDetails = (): string => {
    return `👉 ${this.title} costs $${this.price}. The price with discount is $${this.getPriceWithDiscount()}. The price with discount and tax is $${this.getPriceWithDiscountPlusTax()}.`;
}
    displayDescription = (): string =>{
        return `${this.description}`
    }
    getPriceWithDiscount = (): number =>{
       const discountAmount: number = discountCalculator(this.price, this.discountPercentage);
         const finalPrice: number = this.price - discountAmount;
          return parseFloat(finalPrice.toFixed(2));
    }
    getPriceWithDiscountPlusTax = (): number =>{
        const pricewithTax: number  = calculateTax(this.category, this.getPriceWithDiscount());
        return parseFloat(pricewithTax.toFixed(2));
        
    }

}
