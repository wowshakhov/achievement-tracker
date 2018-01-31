import {Component} from '@angular/core';
import {GoalService} from '../../services/goal.service';

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html'
})
export class MainComponent {
  public goals = this.goalService.getList();

  constructor(private goalService: GoalService) {}
}
