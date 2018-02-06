import {Component} from '@angular/core';
import {GoalService} from '../../services/goal.service';
import {GoalResultService} from '../../services/goal-result.service';
import {ActivatedRoute} from '@angular/router';
import {combineLatest} from 'rxjs/observable/combineLatest';
import {AuthService} from '../../services/auth.service';
import {GoalResultCreationComponent} from '../goal-result-creation/goal-result-creation.component';
import {MatDialog} from '@angular/material';
import {Goal} from '../../models/goal';

@Component({
  selector: 'app-goal-page',
  templateUrl: 'goal-page.component.html',
  styleUrls: ['goal-page.component.scss']
})
export class GoalPageComponent {
  public goal = this.route.params.switchMap(params => this.goalService.get(params['id']));
  public goalResults = this.route.params.switchMap(params => this.goalResultService.getListForGoal(params['id']));
  public data = combineLatest(this.goal, this.goalResults, (goal, goalResults) => ({ goal, goalResults }));

  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
    private goalService: GoalService,
    private goalResultService: GoalResultService,
    private route: ActivatedRoute
  ) {}

  public get userId(): string {
    return this.authService.uid;
  }

  public showForm(goal: Goal) {
    this.dialog.open(GoalResultCreationComponent, {
      width: '300px',
      data: { goal }
    });
  }
}
