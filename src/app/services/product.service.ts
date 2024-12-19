import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    api = 'http://localhost:3000/products'
  Product:Product[]=[
    {id:1, title:'iphone 15',price:2500, quantity : 5, image:"../../assets/images/iphone1.jpg"},
    {id:2, title:'iphone 16' ,price:3000, quantity : 0, image:"../../assets/images/iphone2.jpg"},
    {id:3, title :'iphone14' ,price:3500, quantity :8, image: "../../assets/images/iphone3.jpg"}
     ]
  constructor(private http:HttpClient) { }


  getcalcul(list:any[],criteria:string, value:any){
      let nb=0
      for (let i in list){
        if (list[i][criteria]==value){
          nb++
        }
      }
      return nb
  }

    getAllProducts():Observable<Product[]>{
      return this.http.get<Product[]>(this.api)
    }

    getProductById(id:number):Observable<Product>{
      return this.http.get<Product>(this.api+'/'+id)
    }
    createProduct(product:Product):Observable<Product>{
      return this.http.post<Product>(this.api,product)
    }
    deleteProductById(id:number):Observable<Product>{
      return this.http.delete<Product>(this.api+'/'+id)
    }
    updateProduct(prod:Product,id:number):Observable<Product>{
      return this.http.put<Product>(this.api+'/'+id,prod)
    }
}
