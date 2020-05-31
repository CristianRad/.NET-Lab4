import { Component, OnInit } from '@angular/core';

import { Comment } from '../shared/comment.model';
import { CommentService } from '../shared/comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  comments: Comment[];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentService.getAllComments().subscribe(
      comments => this.comments = comments
    );
  }

}
