import {Component} from '@angular/core';
import {GoalService} from '../../services/goal.service';
import {GoalResultService} from '../../services/goal-result.service';
import {ActivatedRoute} from '@angular/router';
import {combineLatest} from 'rxjs/observable/combineLatest';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-goal-page',
  templateUrl: 'goal-page.component.html'
})
export class GoalPageComponent {
  public goal = this.route.params.switchMap(params => this.goalService.get(params['id']));
  public goalResults = this.route.params.switchMap(params => this.goalResultService.getListForGoal(params['id']));
  public data = combineLatest(this.goal, this.goalResults, (goal, goalResults) => ({ goal, goalResults }));

  constructor(
    private authService: AuthService,
    private goalService: GoalService,
    private goalResultService: GoalResultService,
    private route: ActivatedRoute
  ) {}

  public get userId(): string {
    return this.authService.uid;
  }
}
