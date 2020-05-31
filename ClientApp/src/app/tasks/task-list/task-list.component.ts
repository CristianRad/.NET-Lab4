import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Task } from '../shared/task.model';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public tasks: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getAllTasks().subscribe(
      tasks => this.tasks = tasks
    );
  }

  filterByDate(startDate: Date, startTime: Time, endDate: Date, endTime: Time) {
    let startDateTime, endDateTime;
    if (startDate) {
      startDateTime = startDate;
      if (startTime) {
        startDateTime = `${startDateTime}T${startTime}`;
      }
    }
    if (endDate) {
      endDateTime = endDate;
      if (endTime) {
        endDateTime = `${endDateTime}T${endTime}`;
      }
    }
    this.taskService.getTasksByDateFilter(startDateTime, endDateTime).subscribe(
      tasks => this.tasks = tasks
    );
  }

  delete(taskId: number) {
    this.taskService.deleteTask(taskId).subscribe(
      _ => this.getTasks(),
      err => alert(err.error)
    );
  }

}
