import {Component, Input} from '@angular/core';
import {Goal} from '../../models/goal';
import {GoalService} from '../../services/goal.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-goal',
  templateUrl: 'goal.component.html',
  styleUrls: ['goal.component.scss']
})
export class GoalComponent {
  @Input() public goal: Goal;
  @Input() public showOpenButton: boolean;

  constructor(
    private goalService: GoalService,
    private router: Router
  ) {}

  public open() {
    this.router.navigate([`/goal/${this.goal.id}`]);
  }

  public share() {
    this.goalService.share(this.goal.id);
  }

  public unshare() {
    this.goalService.unshare(this.goal.id);
  }

  public remove() {
    this.goalService.remove(this.goal.id);
  }
}
