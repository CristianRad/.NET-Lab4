import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TaskService } from '../shared/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  private taskForm: FormGroup;
  private importanceTypes = [];
  private stateTypes = [];
  private errorMessages = [];

  constructor(
    private taskService: TaskService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initializeData();
  }

  initializeData() {
    this.taskForm = this.fb.group({
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

  goBack() {
    this.router.navigate(['/tasks']);
  }

  onSubmit() {
    this.taskForm.patchValue({
      added: new Date()
    });
    this.taskService.addTask(this.taskForm.value).subscribe(
      _ => this.goBack(),
      err => this.errorMessages = err.error.errors
    );
  }

}
