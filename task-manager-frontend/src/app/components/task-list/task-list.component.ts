import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css']
})
export class TaskListComponent implements OnInit {

  tasks: any[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getAll().subscribe(data => {
      this.tasks = data;
      console.log(data);
    });
  }
}