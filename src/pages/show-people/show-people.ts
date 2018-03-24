import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShowPeoplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-people',
  templateUrl: 'show-people.html',
})
export class ShowPeoplePage {
  people: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.people = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowPeoplePage');
  }

}
