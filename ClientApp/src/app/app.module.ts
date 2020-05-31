import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { TaskDetailsComponent } from './tasks/task-details/task-details.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskService } from './tasks/shared/task.service';
import { CommentService } from './comments/shared/comment.service';
import { TaskAddComponent } from './tasks/task-add/task-add.component';
import { TaskUpdateComponent } from './tasks/task-update/task-update.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { CommentAddComponent } from './comments/comment-add/comment-add.component';
import { CommentUpdateComponent } from './comments/comment-update/comment-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    TaskDetailsComponent,
    TaskListComponent,
    TaskAddComponent,
    TaskUpdateComponent,
    CommentListComponent,
    CommentAddComponent,
    CommentUpdateComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [TaskService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
