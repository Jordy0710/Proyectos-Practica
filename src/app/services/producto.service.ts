import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = 'http://localhost:8081/api/v1/product/';

  constructor(private http: HttpClient ) { }

  listarTodos(){
    return this.http.get(this.url + 'findAll');
  }

  guardar(data: any){
    return this.http.post(this.url + 'add' , data);
  }

  editar(data: any){
    return this.http.put(this.url + 'update', data);
  }

  buscarPorId( id: number){
    return this.http.get(this.url + 'findById/' + id);
  }

  eliminar(id: number){
    return this.http.delete(this.url + 'delete/' + id);
  }
}
