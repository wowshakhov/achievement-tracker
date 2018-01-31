import {Component, Input} from '@angular/core';
import {GoalResult} from '../../models/goal-result';

@Component({
  selector: 'app-goal-result-list',
  templateUrl: 'goal-result-list.component.html',
  styleUrls: ['goal-result-list.component.scss']
})
export class GoalResultListComponent {
  @Input() public goalResults: Array<GoalResult> = [];
}
