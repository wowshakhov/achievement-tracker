import {Component} from '@angular/core';
import {Photo} from '../../models/photo.model';
import {ResultMetric} from '../../models/result-metric';
import {GoalResultService} from '../../services/goal-result.service';

@Component({
  selector: 'app-goal-result-creation',
  templateUrl: 'goal-result-creation.component.html',
  styleUrls: ['goal-result-creation.component.scss']
})
export class GoalResultCreationComponent {
  public formVisible = false;
  public comment: string;
  public date: Date;
  public resultMetric: ResultMetric;
  public photo: Photo;

  constructor(private goalResultService: GoalResultService) {}

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
        comment: this.comment,
        date: this.date,
        resultMetric: this.resultMetric,
        photo: this.photo
      });
  }
}
