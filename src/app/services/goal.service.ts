import {Injectable} from '@angular/core';
import {BackendDatabaseService} from './backend-database.service';
import {Goal} from '../models/goal';

@Injectable()
export class GoalService extends BackendDatabaseService<Goal> {
  protected entityName = 'goal';
  protected entityModel = Goal;

  public getUserGoals() {
    return super.getList(ref => ref.where('userId', '==', this.authService.uid));
  }

  public getSharedGoals() {
    return super.getList(ref => ref.where('shared', '==', true))
      .map(goals => goals.filter(goal => goal.userId !== this.authService.uid));
  }

  public share(id: string) {
    return this.update(id, { shared: true });
  }

  public unshare(id: string) {
    return this.update(id, { shared: false });
  }
}
