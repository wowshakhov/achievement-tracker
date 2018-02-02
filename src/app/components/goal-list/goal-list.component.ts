import {Component, Input} from '@angular/core';
import {Goal} from '../../models/goal';

@Component({
  selector: 'app-goal-list',
  templateUrl: 'goal-list.component.html'
})
export class GoalListComponent {
  @Input() public goals: Array<Goal> = [];
}
