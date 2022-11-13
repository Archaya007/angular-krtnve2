import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
@Component({
  selector: 'app-Product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product = [];
  model = new Product();
  constructor(private ProductService: ProductService) {}
  ngOnInit() {
    this.getAllProduct();
  }
  getAllProduct() {
    this.ProductService.getAllProductService().subscribe((x: any[]) => {
      this.product = x;
    });
  }
  editProduct(id) {
    this.ProductService
      .getProductService(id)
      .subscribe((data: any) => (this.model = data));
  }
  deleteProduct(id: any) {
    this.ProductService.deleteProductService(id).subscribe((data) => {
      this.getAllProduct();
    });
  }
  addProduct() {
    if (!this.model.id) {
      alert(JSON.stringify(this.model));
      this.ProductService.createProductService(this.model).subscribe((data) => {
        this.getAllProduct();
        this.model = new Product();
      });
    } else {
      alert(JSON.stringify(this.model));
      this.ProductService
        .updateProductService(this.model.id, this.model)
        .subscribe((data) => {
          this.getAllProduct();
          this.model = new Product();
        });
    }
  }
}
