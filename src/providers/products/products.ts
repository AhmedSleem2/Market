import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProductsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProductsProvider Provider');
  }

  getAllProducts(){
    return  this.http.get('https://5bcce576cf2e850013874767.mockapi.io/task/categories');
  }

}
