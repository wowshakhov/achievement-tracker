import {Component, Input} from '@angular/core';
import {GoalResult} from '../../models/goal-result';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-goal-result-list',
  templateUrl: 'goal-result-list.component.html'
})
export class GoalResultListComponent {
  @Input() public goalResults: Array<GoalResult> = [];

  constructor(private authService: AuthService) {}

  public isSelf(goalResult: GoalResult): boolean {
    return this.authService.uid === goalResult.userId;
  }
}
