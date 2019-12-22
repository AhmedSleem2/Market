import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductsProvider } from '../../providers/products/products';
import { l } from '@angular/core/src/render3';

/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public productService : ProductsProvider) {
  }
  items:any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
    this.productService.getAllProducts().subscribe(items=>{
     this.items = items;
     console.log('items',items)
      this.items.map(e=>{
        console.log('e',e.products)
      })
       })
    console.log('id',this.navParams.get('idProduct'))

   
  }

}
