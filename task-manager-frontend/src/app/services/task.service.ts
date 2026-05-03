import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5262/api/tarefas';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  create(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}