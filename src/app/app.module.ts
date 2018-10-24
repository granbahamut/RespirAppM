import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AcercaPage} from '../pages/acerca/acerca';
import { AyudaPage } from '../pages/ayuda/ayuda';
import { RegistrodPage } from '../pages/registrod/registrod';
import { MapacontPage } from '../pages/mapacont/mapacont';
import { ApplicationServiceProvider } from '../providers/application-service/application-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AcercaPage,
    AyudaPage,
    RegistrodPage,
    MapacontPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AcercaPage,
    AyudaPage,
    RegistrodPage,
    MapacontPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApplicationServiceProvider
  ]
})
export class AppModule {}
