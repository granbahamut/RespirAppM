import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the AcercaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acerca',
  templateUrl: 'acerca.html',
})
export class AcercaPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcercaPage');
/*
    let headers = new Headers();

    headers.append('Content-Type', 'aplication/json');

 

    let body = {

      message: "Do you hear me?"

    };

    //this.http.post('https://aqueous-thicket-67866.herokuapp.com/contamination_levels',JSON.stringify(body),{headers: headers})

    this.http.post("https://aqueous-thicket-67866.herokuapp.com",JSON.stringify(body),{headers: headers})

 

    .map(res => res.json())
    .subscribe(data => {
      console.log(data)
    });
*/
  }
  

}
