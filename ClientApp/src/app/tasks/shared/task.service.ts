import { HttpClient } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";
import { Observable } from "rxjs";

import { Task } from "./task.model";

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    constructor(
        private http: HttpClient,
        @Inject('BASE_URL') private baseUrl: string
    ) { }

    getAllTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(this.baseUrl + 'api/tasks');
    }

    getTasksByDateFilter(from: string, to: string): Observable<Task[]> {
        if (!from) {
            from = "";
        }
        if (!to) {
            to = "";
        }
        return this.http.get<Task[]>(this.baseUrl + 'api/tasks?from=' + from + '&to=' + to);
    }

    getTaskById(id: number): Observable<Task> {
        return this.http.get<Task>(this.baseUrl + 'api/tasks' + `/${id}`);
    }

    addTask(task: Task): Observable<Task> {
        return this.http.post<Task>(this.baseUrl + 'api/tasks', task);
    }

    updateTask(task: Task): Observable<Task> {
        return this.http.put<Task>(this.baseUrl + 'api/tasks' + `/${task.id}`, task);
    }

    deleteTask(id: number): Observable<Task> {
        return this.http.delete<Task>(this.baseUrl + 'api/tasks' + `/${id}`);
    }

}