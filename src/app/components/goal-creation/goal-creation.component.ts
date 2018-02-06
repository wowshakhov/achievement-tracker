import {Component} from '@angular/core';
import {GoalService} from '../../services/goal.service';
import {AuthService} from '../../services/auth.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-goal-creation',
  templateUrl: 'goal-creation.component.html',
  styleUrls: ['goal-creation.component.scss']
})
export class GoalCreationComponent {
  public title = '';
  public description = '';
  public dueDate = new Date();

  constructor(
    private dialogRef: MatDialogRef<GoalCreationComponent>,
    private authService: AuthService,
    private goalService: GoalService
  ) {}

  public hideForm() {
    this.dialogRef.close();
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
        dueDate: this.dueDate,
        userId: this.authService.uid,
      });
  }
}
