import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApplicationServiceProvider } from '../../providers/application-service/application-service';

/**
 * Generated class for the RegistrodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrod',
  templateUrl: 'registrod.html',
})
export class RegistrodPage {

  arrayNivelesCont:any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public applicationService:ApplicationServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrodPage');
    this.applicationService.getNivelContaminacion().subscribe(
      (val) => {
        console.log(val);
        this.arrayNivelesCont = val;
      }, 
      (error) => {console.error(error)}
    );
  }

}
