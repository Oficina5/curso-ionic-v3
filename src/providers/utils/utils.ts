import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
/*
  Generated class for the UtilsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilsProvider {

  constructor(
      public toastCtrl: ToastController
  ) {
    console.log('Hello UtilsProvider Provider');
  }

  callToast(classe, posicao) {
    let toast = this.toastCtrl.create({
      message: 'Hello World!',
      position: posicao,
      cssClass: classe,
      duration: 2500
    });
    
    toast.present();
}

}
