import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Comment } from '../shared/comment.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommentService } from '../shared/comment.service';

@Component({
  selector: 'app-comment-update',
  templateUrl: './comment-update.component.html',
  styleUrls: ['./comment-update.component.css']
})
export class CommentUpdateComponent implements OnInit {

  @Input() comment: Comment;
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
      id: [this.comment.id],
      text: [this.comment.text],
      important: [this.comment.important],
      taskId: [this.comment.taskId]
    });
  }

  onSubmit() {
    this.commentService.updateComment(this.commentForm.value).subscribe(
      _ => {
        this.initializeData();
        this.onCommentSubmit.emit();
      },
      err => this.errorMessages = err.error.errors
    );
  }

}
