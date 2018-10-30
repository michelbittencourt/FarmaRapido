import { DetalhePage } from './../detalhe/detalhe';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  note: string[];
  items: Array<{title: string, note: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.note = ['EMS', 'Medley', 'Teuto', 'Genérico', 'Globo'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: localStorage.getItem("Medicamento") + " " + i +"mg",
        note: this.note[Math.floor(Math.random() * this.note.length)]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(DetalhePage, {
      item: item
    });
  }
}
