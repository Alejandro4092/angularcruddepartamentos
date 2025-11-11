import { environment } from "../../environments/environment.development";
import { Departamento } from "../models/departamento";
import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({ providedIn: 'root' })
export class ServiceDepartamentos{
    constructor(private _http:HttpClient){}
    getDepartamentos(): Observable<Array<Departamento>>{
    let request="api/departamentos";
    let url= environment.urlApiDepartamentos+request;
    return this._http.get<Array<Departamento>>(url);
    }

    createDepartamento(departamento:Departamento):Observable<any>{
        //IGUAL QUE REACT O JQUERY
        let json=JSON.stringify(departamento);
        //Creamos la cabecera
        let header= new HttpHeaders();
        //Indicamos el tipo de objeto a enviar en data
        header=header.set("Content-type","application/json");
        let request="api/departamentos"
        let url=environment.urlApiDepartamentos+request;
        return this._http.post(url,json,{headers:header})
    }

}