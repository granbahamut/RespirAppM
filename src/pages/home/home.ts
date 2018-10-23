import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController) {

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
}
