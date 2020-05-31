import { HttpClient } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";
import { Observable } from "rxjs";

import { Comment } from "./comment.model";

@Injectable({
    providedIn: 'root'
})
export class CommentService {

    constructor(
        private http: HttpClient,
        @Inject('BASE_URL') private baseUrl: string
    ) { }

    getAllComments(): Observable<Comment[]> {
        return this.http.get<Comment[]>(this.baseUrl + 'api/comments');
    }

    getCommentById(id: number): Observable<Comment> {
        return this.http.get<Comment>(this.baseUrl + 'api/comments' + `/${id}`);
    }

    addComment(taskId, comment: Comment): Observable<Comment> {
        return this.http.post<Comment>(this.baseUrl + 'api/tasks' + `/${taskId}` + '/comments', comment);
    }

    updateComment(comment: Comment): Observable<Comment> {
        return this.http.put<Comment>(this.baseUrl + 'api/comments' + `/${comment.id}`, comment);
    }

    deleteComment(id: number): Observable<Comment> {
        return this.http.delete<Comment>(this.baseUrl + 'api/comments' + `/${id}`);
    }

}