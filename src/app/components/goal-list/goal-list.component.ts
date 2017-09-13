import {Component, Input} from '@angular/core';
import {Goal} from '../../models/goal';

@Component({
  selector: 'app-goal-list',
  templateUrl: 'goal-list.component.html',
  styleUrls: ['goal-list.component.scss']
})
export class GoalListComponent {
  @Input() public goals: Array<Goal> = [];
}
