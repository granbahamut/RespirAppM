import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApplicationServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApplicationServiceProvider {

  dbData:any;

  constructor(public http: HttpClient) {
    console.log('Hello ApplicationServiceProvider Provider');
  }

  /*Obtiene los niveles de contaminación que hay en la BD*/
  getNivelContaminacion(){
    this.dbData = this.http.get("https://aqueous-thicket-67866.herokuapp.com/contamination_levels.json");
    console.log(this.dbData);
    return this.dbData;
  }

    /*Obtiene los tipos de reporte que hay en la BD*/
    getTipoRep(){
      this.dbData = this.http.get("https://aqueous-thicket-67866.herokuapp.com/report_types.json");
      console.log(this.dbData);
      return this.dbData;
    }

    //Funcion para enviar datos
    
    ///////
}
