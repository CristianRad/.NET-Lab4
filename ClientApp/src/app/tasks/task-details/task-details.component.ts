import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Task } from '../shared/task.model';
import { TaskService } from '../shared/task.service';
import { Comment } from 'src/app/comments/shared/comment.model';
import { CommentService } from 'src/app/comments/shared/comment.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  @Input() task: Task;
  private commentToEdit: Comment;

  constructor(
    private taskService: TaskService,
    private commentService: CommentService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getSelectedTask();
  }

  getSelectedTask() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.taskService.getTaskById(id).subscribe(
      task => this.task = task
    );
  }

  goBack() {
    this.router.navigate(['/tasks']);
  }

  setCommentToEdit(comment: Comment) {
    this.commentToEdit = comment;
  }

  deleteComment(commentId: number) {
    this.commentService.deleteComment(commentId).subscribe(
      _ => this.getSelectedTask(),
        err => console.log(err)
    );
  }

  reloadData(action: any) {
    this.getSelectedTask();
    this.commentToEdit = null;
  }

}
