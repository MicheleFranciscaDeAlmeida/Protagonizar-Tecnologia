import { Component } from '@angular/core';
import { TaskListComponent } from './components/task-list/task-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, // 👈 ADICIONE ISSO
    TaskListComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}