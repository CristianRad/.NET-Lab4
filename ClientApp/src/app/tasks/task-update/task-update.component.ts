import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TaskService } from '../shared/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent implements OnInit {

  task: Task;

  private errorMessages = [];
  private taskForm: FormGroup;
  private importanceTypes = [];
  private stateTypes = [];

  constructor(private taskService: TaskService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.initializeData();
    this.getTask();
  }

  initializeData() {
    this.taskForm = this.fb.group({
      id: [''],
      title: [''],
      description: [''],
      added: [''],
      deadline: [''],
      importance: [''],
      state: ['']
    });

    this.importanceTypes = [
      { id: 0, name: 'LOW' },
      { id: 1, name: 'MEDIUM' },
      { id: 2, name: 'HIGH' }
    ];

    this.stateTypes = [
      { id: 0, name: 'OPEN' },
      { id: 1, name: 'IN_PROGRESS' },
      { id: 2, name: 'CLOSED' }
    ];
  }

  getTask() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.taskService.getAllTasks().subscribe(
      tasks => {
        this.task = tasks.find(t => t.id === id);
        this.taskForm = this.fb.group(
          {
            id: [this.task.id],
            title: [this.task.title],
            description: [this.task.description],
            added: [this.task.added],
            deadline: [this.task.deadline],
            importance: [this.task.importance],
            state: [this.task.state]
          }
        );
      }
    );
  }

  goBack() {
    this.router.navigate(['/tasks']);
  }

  onUpdate() {
    this.taskService.updateTask(this.taskForm.value).subscribe(
      _ => this.goBack(),
      err => this.errorMessages = err.error.errors
    );
  }

}
