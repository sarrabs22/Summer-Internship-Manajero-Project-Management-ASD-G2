import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectService } from '../Services/project.service';
import { TaskService } from '../Services/task.service';
import { FeedbackService } from '../Services/feedback.service';
import { CreateProjectDialogComponent } from '../create-project-dialog/create-project-dialog.component';
import { CreateTaskDialogComponent } from '../create-task-dialog/create-task-dialog.component';
import { CreateFeedbackDialogComponent } from '../create-feedback-dialog/create-feedback-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  projects = [];
  tasks = [];
  feedbacks = [];

  constructor(
    private projectService: ProjectService,
    private taskService: TaskService,
    private feedbackService: FeedbackService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadProjects();
    this.loadTasks();
    this.loadFeedbacks();
  }

  loadProjects(): void {
    this.projectService.getAllProjects().subscribe(data => {
      this.projects = data;
    });
  }

  loadTasks(): void {
    this.taskService.getAllTasks().subscribe(data => {
      this.tasks = data;
    });
  }

  loadFeedbacks(): void {
    this.feedbackService.getAllFeedbacks().subscribe(data => {
      this.feedbacks = data;
    });
  }

  viewProjectDetails(project): void {
    // Logic to view project details
  }

  viewTaskDetails(task): void {
    // Logic to view task details
  }

  viewFeedbackDetails(feedback): void {
    // Logic to view feedback details
  }

  openCreateProjectDialog(): void {
    const dialogRef = this.dialog.open(CreateProjectDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadProjects();
      }
    });
  }

  openCreateTaskDialog(): void {
    const dialogRef = this.dialog.open(CreateTaskDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadTasks();
      }
    });
  }

  openCreateFeedbackDialog(): void {
    const dialogRef = this.dialog.open(CreateFeedbackDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadFeedbacks();
      }
    });
  }
}