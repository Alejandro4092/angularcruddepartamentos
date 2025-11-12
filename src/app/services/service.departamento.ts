import { environment } from "../../environments/environment.development";
import { Departamento } from "../models/departamento";
import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { DepartamentosComponent } from "../components/departamentos.component/departamentos.component";
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
    findDepartamento(idDepartamento:number):Observable<Departamento>{
        let request="api/departamentos/"+idDepartamento;
        let url=environment.urlApiDepartamentos+request;
        return this._http.get<Departamento>(url);

    }
    updateDepartamento(departamento:Departamento):Observable<any>{
        let json =JSON.stringify(departamento);
        let header=new HttpHeaders().set("Content-type","application/json");
        let request="api/departamentos";
        let url=environment.urlApiDepartamentos+request;
        return this._http.put(url,json,{headers:header});
    }
    deleteDepartamento(idDepartamento:number):Observable<any>{
        let request="api/departamentos/"+idDepartamento;
        let url=environment.urlApiDepartamentos+request;
        return this._http.delete(url);
    }

}