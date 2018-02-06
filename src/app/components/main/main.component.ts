import {Component} from '@angular/core';
import {GoalService} from '../../services/goal.service';
import {combineLatest} from 'rxjs/observable/combineLatest';
import {MatDialog} from '@angular/material';
import {GoalCreationComponent} from '../goal-creation/goal-creation.component';

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.scss']
})
export class MainComponent {
  public userGoals = this.goalService.getUserGoals();
  public sharedGoals = this.goalService.getSharedGoals();
  public goals = combineLatest(this.userGoals, this.sharedGoals, (user, shared) => ({ user, shared }));
  public selectedIndex = 0;

  constructor(
    private dialog: MatDialog,
    private goalService: GoalService
  ) {}

  public showForm() {
    this.dialog.open(GoalCreationComponent, { width: '300px' });
  }
}
