import {Component, Input} from '@angular/core';
import {Goal} from '../../models/goal';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-goal-list',
  templateUrl: 'goal-list.component.html'
})
export class GoalListComponent {
  @Input() public goals: Array<Goal> = [];

  constructor(private authService: AuthService) {}

  public get userId(): string {
    return this.authService.uid;
  }
}
