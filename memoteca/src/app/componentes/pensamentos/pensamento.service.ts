import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = ' http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) { }

  // O Observable é utilizado internamente pelo framework e já é
  // instalado quando você cria uma nova aplicação Angular e é uma funcionalidade da biblioteca RXJS
  listar(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.API)
  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento)
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
        // abaixo uso uma template string ente `....`
        const url = `${this.API}/${pensamento.id}`
        return this.http.put<Pensamento>(url, pensamento)
  }

  excluir(id: number): Observable<Pensamento> {
    // abaixo uso uma template string ente `....`
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }

  buscarPorId(id: number): Observable<Pensamento> {
        // abaixo uso uma template string ente `....`
        const url = `${this.API}/${id}`
        return this.http.get<Pensamento>(url)
  }

}
