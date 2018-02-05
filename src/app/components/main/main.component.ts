import {Component} from '@angular/core';
import {GoalService} from '../../services/goal.service';
import {combineLatest} from 'rxjs/observable/combineLatest';

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html'
})
export class MainComponent {
  public userGoals = this.goalService.getUserGoals();
  public sharedGoals = this.goalService.getSharedGoals();
  public goals = combineLatest(this.userGoals, this.sharedGoals, (user, shared) => ({ user, shared }));
  public selectedIndex = 0;

  constructor(private goalService: GoalService) {}
}
