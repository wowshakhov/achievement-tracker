import {Component, Inject, Input} from '@angular/core';
import {Photo} from '../../models/photo.model';
import {ResultMetric} from '../../models/result-metric';
import {GoalResultService} from '../../services/goal-result.service';
import {Goal} from '../../models/goal';
import {AuthService} from '../../services/auth.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-goal-result-creation',
  templateUrl: 'goal-result-creation.component.html',
  styleUrls: ['goal-result-creation.component.scss']
})
export class GoalResultCreationComponent {
  public comment = '';
  public date = new Date();
  public resultMetric: ResultMetric;
  public photo: Photo;

  constructor(
    private authService: AuthService,
    private dialogRef: MatDialogRef<GoalResultCreationComponent>,
    private goalResultService: GoalResultService,
    @Inject(MAT_DIALOG_DATA) private data: { goal: Goal }
  ) {}

  public hideForm() {
    this.dialogRef.close();
  }

  public onSubmit() {
    this.hideForm();
    this.createGoalResult();
  }

  private createGoalResult() {
    this.goalResultService
      .create({
        goalId: this.data.goal.id,
        comment: this.comment,
        date: this.date,
        resultMetric: this.resultMetric,
        userId: this.authService.uid,
        // photo: this.photo
      });
  }
}
