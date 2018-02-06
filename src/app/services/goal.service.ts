import {Injectable} from '@angular/core';
import {BackendDatabaseService} from './backend-database.service';
import {Goal} from '../models/goal';
import {AuthService} from './auth.service';

@Injectable()
export class GoalService {
  constructor(
    private authService: AuthService,
    private db: BackendDatabaseService<Goal>
  ) {}

  public getUserGoals() {
    return this.db.getList(ref => ref.where('userId', '==', this.authService.uid));
  }

  public getSharedGoals() {
    return this.db.getList(ref => ref.where('shared', '==', true))
      .map(goals => goals.filter(goal => goal.userId !== this.authService.uid));
  }

  public share(id: string) {
    return this.db.update(id, { shared: true });
  }

  public unshare(id: string) {
    return this.db.update(id, { shared: false });
  }
}
