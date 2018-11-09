//import { HttpClient } from '@angular/common/http';
//import { Injectable } from '@angular/core';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { Http, Headers, RequestOptions } from '@angular/http';


import { AcercaPage } from '../acerca/acerca';
import { AyudaPage } from '../ayuda/ayuda';
import { RegistrodPage } from '../registrod/registrod';
import { MapacontPage } from '../mapacont/mapacont';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  acerca = AcercaPage;
  ayuda = AyudaPage;
  registrod = RegistrodPage;
  mapacont = MapacontPage;
  dbData:any;

  constructor(public navCtrl: NavController/*,
              public httpClient: HttpClient,
              public http: HttpClient*/) {

  }
  iraNuevapagina(){
    console.log("Click a nueva pagina");
    this.navCtrl.push(this.acerca);
  }

  //setRoot establece la raiz, por esa razon no deja retorno
  iraAyuda(){
    console.log("Click a Ayuda");
    this.navCtrl.push(this.ayuda);
  }

  iraRegistrod(){
    console.log("Click a Ayuda");
    this.navCtrl.push(this.registrod);
  }

  iraMapacont(){
    console.log("Click a Ayuda");
    this.navCtrl.push(this.mapacont);
  }

/*
  sendPostRequest() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    const requestOptions = new RequestOptions({ headers: headers });

    let postData = {
            "name": "Customer004",
            "email": "customer004@email.com",
            "tel": "0000252525"
    }

    this.http.post("https://aqueous-thicket-67866.herokuapp.com/reports", postData, requestOptions)
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });
  }*/
}
