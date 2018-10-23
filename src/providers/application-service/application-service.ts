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

  /*Obtiene a de niveles de contaminación que hay en la BD*/
  getNivelContaminacion(){
    this.dbData = this.http.get("https://shielded-savannah-22643.herokuapp.com/contamination_levels.json");
    console.log(this.dbData);
    return this.dbData;
  }

}
