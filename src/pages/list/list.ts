import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WebservicesProvider } from '../../providers/webservices/webservices';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  people: any;

  constructor(public webservice: WebservicesProvider,  public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }

  ngOnInit() {
    this.getPeople();
  }

  getPeople() {
    this.webservice.getPeople().subscribe(
      result => {
        console.log("entrei");
        console.log(result);
        this.people = result.results;
      },

      error => {
        console.log("entrei erro");
        console.log(error);
      }

    )
  }

  selectPeople(people) { 
    console.log(people);
    this.navCtrl.push('ShowPeoplePage', people);
  }
  
}
