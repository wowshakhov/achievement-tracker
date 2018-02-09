import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {GoalResult} from '../../models/goal-result';

@Component({
  selector: 'app-goal-progress',
  templateUrl: 'goal-progress.component.html',
  styleUrls: ['goal-progress.component.scss']
})
export class GoalProgressComponent implements OnChanges {
  @Input() public goalResults: GoalResult[];
  public results: any;

  public onSelect() {

  }

  public ngOnChanges(changes: SimpleChanges) {
    if ('goalResults' in changes) {
      this.results = [{
        name: 'progress',
        series: this.goalResults
          .filter(goalResult => !isNaN(+goalResult.resultMetric))
          .map(result => ({
            name: result.date || '',
            value: result.resultMetric,
          })),
      }];
    }
  }
}
