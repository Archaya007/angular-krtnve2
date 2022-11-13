export class Product {
  id: number;
 Product_Name: string;
Product_brand: string;
  Price: number;
  Date: Date;
  Payment_Mode: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}