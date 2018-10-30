import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';


/**
 * Generated class for the BulaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-bula',
  templateUrl: 'bula.html',
})
export class BulaPage {

  medicamento;

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BulaPage');
  }

  pesquisar() {
    const browser = this.iab.create('https://www.google.com.br/search?q=bula+' + this.medicamento);
    
    browser.show();

    //https://www.google.com.br/search?q=ionic
  }

}
