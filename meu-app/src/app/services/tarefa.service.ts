import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private apiUrl = 'http://localhost:5262/api/tarefas';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.apiUrl);
  }

  getById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  create(tarefa: any) {
    return this.http.post(this.apiUrl, tarefa);
  }

  update(id: number, tarefa: any) {
    return this.http.put(`${this.apiUrl}/${id}`, tarefa);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}