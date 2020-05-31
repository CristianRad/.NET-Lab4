import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { TaskListComponent } from "./tasks/task-list/task-list.component";
import { TaskDetailsComponent } from "./tasks/task-details/task-details.component";
import { TaskAddComponent } from "./tasks/task-add/task-add.component";
import { TaskUpdateComponent } from "./tasks/task-update/task-update.component";
import { CommentListComponent } from "./comments/comment-list/comment-list.component";

const routes = [
    { path: '', component: HomeComponent },
    { path: 'tasks', component: TaskListComponent },
    { path: 'tasks/:id', component: TaskDetailsComponent },
    { path: 'task-add', component: TaskAddComponent },
    { path: 'task-update/:id', component: TaskUpdateComponent },
    { path: 'comments', component: CommentListComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }