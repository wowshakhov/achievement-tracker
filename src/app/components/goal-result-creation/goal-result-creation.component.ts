import {Component, Input} from '@angular/core';
import {Photo} from '../../models/photo.model';
import {ResultMetric} from '../../models/result-metric';
import {GoalResultService} from '../../services/goal-result.service';
import {Goal} from '../../models/goal';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-goal-result-creation',
  templateUrl: 'goal-result-creation.component.html',
  styleUrls: ['goal-result-creation.component.scss']
})
export class GoalResultCreationComponent {
  @Input() private goal: Goal;
  public formVisible = false;
  public comment = '';
  public date = new Date();
  public resultMetric: ResultMetric;
  public photo: Photo;

  constructor(
    private authService: AuthService,
    private goalResultService: GoalResultService
  ) {}

  public showForm() {
    this.formVisible = true;
  }

  public hideForm() {
    this.formVisible = false;
  }

  public onSubmit() {
    this.hideForm();
    this.createGoalResult();
  }

  private createGoalResult() {
    this.goalResultService
      .create({
        goalId: this.goal.id,
        comment: this.comment,
        date: this.date,
        resultMetric: this.resultMetric,
        userId: this.authService.uid,
        // photo: this.photo
      });
  }
}
