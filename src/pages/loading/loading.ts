import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';


/**
 * Generated class for the LoadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  routingToSliderPage() {
    this.navCtrl.push('SliderPage')
  
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoadingPage');
    
    setTimeout(() => { this.routingToSliderPage() }, 5000);
  }  


 


 
  
}
