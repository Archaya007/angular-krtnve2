import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}
  public getAllProductService() {
    return this.httpClient.get('http://localhost:8080/product/');
  }
  public getProductService(id) {
    return this.httpClient.get('http://localhost:8080/product/' + id);
  }
  public deleteProductService(id) {
    return this.httpClient.delete('http://localhost:8080/product/' + id);
  }
  public createProductService(Product) {
    console.log(JSON.stringify(Product))
    const headers = { 'content-type': 'application/json' };
    return this.httpClient.post(
      'http://localhost:8080/product/',
      JSON.stringify(Product),
      {
        headers: headers,
      }
    );
  }
 public updateProductService(id, Product) {
  console.log(JSON.stringify(Product))
    const headers = { 'content-type': 'application/json' };
    return this.httpClient.put(
      'http://localhost:8080/product/' + id,
      JSON.stringify(Product),
      {
        headers: headers,
      }
    );
  }
}