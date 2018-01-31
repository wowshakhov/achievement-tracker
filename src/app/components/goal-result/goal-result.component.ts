import {Component, Input} from '@angular/core';
import {GoalResult} from '../../models/goal-result';

@Component({
  selector: 'app-goal-result',
  templateUrl: 'goal-result.component.html',
  styleUrls: ['goal-result.component.scss']
})
export class GoalResultComponent {
  @Input() public goalResult: GoalResult;
}
