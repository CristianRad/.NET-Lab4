import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CommentService } from '../shared/comment.service';
import { Task } from 'src/app/tasks/shared/task.model';

@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.css']
})
export class CommentAddComponent implements OnInit {

  @Input() task: Task;
  @Output() onCommentSubmit: EventEmitter<any> = new EventEmitter<any>();
  private errorMessages = [];

  private commentForm: FormGroup;

  constructor(
    private commentService: CommentService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initializeData();
  }

  initializeData() {
    this.commentForm = this.fb.group({
      text: [''],
      important: [false],
    });
  }

  onSubmit() {
    this.commentService.addComment(this.task.id, this.commentForm.value).subscribe(
      _ => {
        this.initializeData();
        this.onCommentSubmit.emit();
      },
      err => this.errorMessages = err.error.errors
    );
  }

}
