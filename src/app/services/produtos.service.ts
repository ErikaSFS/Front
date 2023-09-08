import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtos } from '../models/produtos.model';



const baseUrl = 'http://localhost:8080/api/produtos';
@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor( private http: HttpClient) { }

    getAll():  Observable<Produtos[]> {
      return this.http.get<Produtos[]>(baseUrl);
    }
    get(codigo: any): Observable<Produtos> {
      return this.http.get(`${baseUrl}/${codigo}`);
    }
  
    create(data: any): Observable<any> {
      return this.http.post(baseUrl, data);
    }
  
    update(codigo: any, data: any): Observable<any> {
      return this.http.put(`${baseUrl}/${codigo}`, data);
    }
  
    delete(codigo: any): Observable<any> {
      return this.http.delete(`${baseUrl}/${codigo}`);
    }

    findByNome(nome: any): Observable<Produtos[]> {
      return this.http.get<Produtos[]>(`${baseUrl}?nome=${nome}`);
    }

  }