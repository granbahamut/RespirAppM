import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClient } from '@angular/common/http';

import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  name:string = '';
  age:number;
  found:boolean;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              private http: HttpClient) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  onNameKeyUp(event:any){
    this.name = event.target.value;
    this.found = false;
  }

  ///////////funcion ingresar////////////////////////
  postProfile(){
    this.http.post("https://aqueous-thicket-67866.herokuapp.com/contamination_levels",
    {
      nombre:'prueba',
      descripcion: 'prueba 1',
      estado: 'activo'
    })
    .subscribe(
      (data:any) => {
        console.log(data);
      }
    )
  }

}

