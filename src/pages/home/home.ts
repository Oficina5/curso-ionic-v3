import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UtilsProvider } from '../../providers/utils/utils';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public photos = [];
  public base64Image: string;
  public cdBarra: any;

  constructor(
    public navCtrl: NavController,
    public utils: UtilsProvider,
    private push: Push,
    private camera: Camera,
    private base64ToGallery: Base64ToGallery,
    private barCode: BarcodeScanner
  ) {
    
// to check if we have permission
this.push.hasPermission()
  .then((res: any) => {

    if (res.isEnabled) {
      console.log('We have permission to send push notifications');
    } else {
      console.log('We do not have permission to send push notifications');
    }

  });
  
    // to initialize push notifications

    const options: PushOptions = {
      android: {
        senderID: '',
        sound: true,
        icon: 'notification',
        clearBadge: true
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'false'
      },
      windows: {},
      browser: {
        pushServiceURL: 'http://push.api.phonegap.com/v1/push'
      }
    };

    const pushObject: PushObject = this.push.init(options);

    pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));

    pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));

    pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  }

  codigoBarra() {
    this.barCode.scan().then(barcodeData => {
      this.cdBarra = JSON.stringify(barcodeData);
      console.log('Barcode data', barcodeData);
    }).catch(err => {
       console.log('Error', err);
    });
  }

  presentToast(classe, posicao) {
    this.utils.callToast(classe, posicao);
  }

  deletePhoto(index) {
    this.photos.splice(index, 1);
  }

  takePhoto() {
    const options : CameraOptions = {
      quality: 30, // picture quality
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options) .then((imageData) => {

        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photos.push(this.base64Image);
        this.photos.reverse();
        
      }, (err) => {
        console.log('Errro na Photo');
        console.log(err);
      });    
  }
  
}
