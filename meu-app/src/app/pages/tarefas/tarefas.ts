import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TarefaService } from '../../services/tarefa.service';

@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tarefas.html'
})
export class TarefasComponent implements OnInit {

  tarefas: any[] = [];

  novaTarefa = {
    titulo: '',
    descricao: '',
    status: 'Pendente'
  };

  constructor(private service: TarefaService) {}

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.service.getAll().subscribe((data: any) => {
      this.tarefas = data;
    });
  }

  criar() {
    this.service.create(this.novaTarefa).subscribe(() => {
      this.novaTarefa = { titulo: '', descricao: '', status: 'Pendente' };
      this.listar();
    });
  }

  deletar(id: number) {
    this.http.delete(`http://localhost:5262/tarefas/${id}`).subscribe(() => {
      this.carregarTarefas();
    });
  }
}