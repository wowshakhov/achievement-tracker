import {Component} from '@angular/core';
import {GoalService} from '../../services/goal.service';

@Component({
  selector: 'app-goal-creation',
  templateUrl: 'goal-creation.component.html',
  styleUrls: ['goal-creation.component.scss']
})
export class GoalCreationComponent {
  public formVisible = false;
  public title = '';
  public description = '';
  public dueDate = new Date();

  constructor(private goalService: GoalService) {}

  public showForm() {
    this.formVisible = true;
  }

  public hideForm() {
    this.formVisible = false;
  }

  public onSubmit() {
    this.hideForm();
    this.createGoal();
  }

  private createGoal() {
    this.goalService
      .create({
        title: this.title,
        description: this.description,
        dueDate: this.dueDate.toLocaleDateString()
      });
  }
}
