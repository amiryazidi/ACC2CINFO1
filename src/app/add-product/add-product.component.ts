import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { Product } from '../model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private productservice:ProductService,private router:Router){}
  formLogin =  new FormGroup({
    id : new FormControl('',[Validators.required]),
    title : new FormControl('',[Validators.required,Validators.minLength(4)]),
    price : new FormControl('',[Validators.required,Validators.min(0) ]),
    quantity : new FormControl('',[Validators.required,Validators.min(0)] ),
    image : new FormControl ('',[Validators.required, Validators.minLength(8)]),
   })

   add(){
    const productBody:Product={
      id:Number(this.formLogin.value!.id),
      title:this.formLogin.value!.title??"",
      price:Number(this.formLogin.value!.price),
      quantity: Number(this.formLogin.value!.quantity),
      image: this.formLogin.value!.image??"",
    }
// this.productservice.Product.push(this.formLogin.value as any)
this.productservice.createProduct(productBody).subscribe(()=>this.router.navigateByUrl("/product")
)
   }
}
