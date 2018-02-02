import {Component, Input} from '@angular/core';
import {GoalResult} from '../../models/goal-result';

@Component({
  selector: 'app-goal-result-list',
  templateUrl: 'goal-result-list.component.html'
})
export class GoalResultListComponent {
  @Input() public goalResults: Array<GoalResult> = [];
}
