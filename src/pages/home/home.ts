import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductsProvider } from '../../providers/products/products';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public productService : ProductsProvider) {

  }
  products;

  ionViewDidLoad() {
    console.log('ionViewDidLoad home');
      this.productService.getAllProducts().subscribe(result=>{
        this.products = result;
      })
   
  }  
   
  showProduct(id){
    this.navCtrl.push('ProductsPage',{'idProduct':id})
  }

}
