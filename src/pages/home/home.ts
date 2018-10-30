import { PedidosPage } from './../pedidos/pedidos';
import { FarmaciasPage } from './../farmacias/farmacias';
import { PrecosPage } from './../precos/precos';
import { BulaPage } from './../bula/bula';
import { ListPage } from './../list/list';
import { Component } from '@angular/core';
import { NavController, AlertController, Slides } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ViewChild } from '@angular/core';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  @ViewChild('slidehome') slides: Slides;
  remedio:string = "";



  constructor(public navCtrl: NavController, private iab: InAppBrowser, public alertCtrl: AlertController) {
  }

  ionViewDidEnter() {
    // this.slideChanged()
  }

  slideChanged() {
    this.slides.slideNext(8000)
    this.slides.loop = true;
  }

  buscar() {
    localStorage.setItem("Medicamento", this.remedio)
    this.navCtrl.push(ListPage)
  }


  bula() {

    if(this.remedio.length < 1) {
      let alert = this.alertCtrl.create({
        title: 'Medicamento incorreto',
        subTitle: 'É necessário digitar o nome do medicamento acima para iniciar a pesquisa',
        buttons: ['OK']
      });
      alert.present();
    } else {
      const browser = this.iab.create('https://www.google.com.br/search?q=bula+' + this.remedio);
      
      browser.show();
  
      //https://www.google.com.br/search?q=ionic
    }
  }

  precos() {
    this.navCtrl.push(PrecosPage);
  }

  farmacias() {
    this.navCtrl.push(FarmaciasPage)
  }

  pedidos() {
    this.navCtrl.push(PedidosPage)
  }
}
