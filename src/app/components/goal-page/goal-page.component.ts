import {Component, Input} from '@angular/core';
import {Goal} from '../../models/goal';
import {GoalService} from '../../services/goal.service';
import {GoalResultService} from '../../services/goal-result.service';

@Component({
  selector: 'app-goal-page',
  templateUrl: 'goal-page.component.html'
})
export class GoalPageComponent {
  @Input() public id: string;

  constructor(
    private goalService: GoalService,
    private goalResultService: GoalResultService
  ) {}
}
