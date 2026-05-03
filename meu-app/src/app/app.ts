import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('meu-app');

  tarefas: any[] = [];

  constructor(private http: HttpClient) {
    this.carregarTarefas(); // já carrega ao abrir
  }

  carregarTarefas() {
    this.http.get<any[]>('http://localhost:5262/tarefas')
      .subscribe(dados => {
        this.tarefas = dados;
      });
  }

  deletarTarefa(id: number) {
    this.http.delete(`http://localhost:5262/tarefas/${id}`)
      .subscribe(() => {
        this.carregarTarefas();
      });
  }
}