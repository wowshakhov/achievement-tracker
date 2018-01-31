import {Component, Input} from '@angular/core';
import {Goal} from '../../models/goal';
import {GoalService} from '../../services/goal.service';
import {GoalResultService} from '../../services/goal-result.service';

@Component({
  selector: 'app-goal',
  templateUrl: 'goal.component.html',
  styleUrls: ['goal.component.scss']
})
export class GoalComponent {
  @Input() public goal: Goal;
  public goalResults = this.goalResultService.getList();

  constructor(
    private goalService: GoalService,
    private goalResultService: GoalResultService
  ) {}

  public remove() {
    this.goalService.remove(this.goal.id);
  }
}
