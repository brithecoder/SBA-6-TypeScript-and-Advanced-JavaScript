import { discountCalculator } from "../utils/discountCalculator";

export interface ProductData {
    id: number;
    name: string;
    description: string;
    price: number;
    discountPercentage: number;
    category: string; // Assuming 'groceries' is a key category
}

export class Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;

  constructor(id: number, title: string, description:string, category: string,  price: number, discountPercentage: number){
      
  this.id = id;
  this.title = title;
  this.description = description;
  this.category = category;
  this.price = price;
  this.discountPercentage = discountPercentage;
  }
   displayDetails = (): string => {
    return `${this.title} costs $${this.price}. The price with discount is $${this.getPriceWithDiscount()} and the ID is: ${this.id}.`;
}
    getPriceWithDiscount = (): number =>{
       const discountAmount: number = discountCalculator(this.price, this.discountPercentage);
         const finalPrice: number = this.price - discountAmount;
          return parseFloat(finalPrice.toFixed(2));
    }

}
