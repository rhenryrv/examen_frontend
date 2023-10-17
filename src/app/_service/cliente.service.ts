import { Injectable } from '@angular/core';
import { Cliente } from '../_model/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  private urlEndPoint: string  = 'http://localhost:8080/clientes'


  constructor(public http:HttpClient) { }

  getClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.urlEndPoint);
  }

  getClienteById(id:number):Observable<Cliente>{
    return this.http.get<Cliente>(this.urlEndPoint+'/'+id);
  }

  saveCliente(Cliente: Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.urlEndPoint ,Cliente);
  }

  updateCliente(Cliente: Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(this.urlEndPoint ,Cliente);
  }

  deleteCliente(id:number):Observable<any>{
    return this.http.delete<any>(this.urlEndPoint+'/'+id)
  }
}
