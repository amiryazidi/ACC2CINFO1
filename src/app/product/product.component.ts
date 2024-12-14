import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private ps: ProductService) { }
  priceMax!:number
  Product: Product[] = [];

  ngOnInit(){
   // this.Product= this.ps.Product
 this.ps.getAllProducts().subscribe(
  (data) => this.Product=data
 )
  }


  buy(id: number) {
    this.Product.find(p => p.id === id)!.quantity--;
  }

    getStock(){
        return this.ps.getcalcul(this.Product,'quantity',0)
    }





}
