import {Component, Input} from '@angular/core';
import {GoalResult} from '../../models/goal-result';
import {GoalResultService} from '../../services/goal-result.service';

@Component({
  selector: 'app-goal-result',
  templateUrl: 'goal-result.component.html',
  styleUrls: ['goal-result.component.scss']
})
export class GoalResultComponent {
  @Input() public goalResult: GoalResult;
  @Input() public showDeleteButton: boolean;

  constructor(private goalResultService: GoalResultService) {}

  public remove() {
    this.goalResultService.remove(this.goalResult.id);
  }
}
