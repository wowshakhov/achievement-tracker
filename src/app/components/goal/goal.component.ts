import {Component, Input} from '@angular/core';
import {Goal} from '../../models/goal';

@Component({
  selector: 'app-goal',
  templateUrl: 'goal.component.html'
})
export class GoalComponent {
  @Input() public goal: Goal;
}
