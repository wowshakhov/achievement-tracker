import {Injectable} from '@angular/core';
import {BackendDatabaseService} from './backend-database.service';
import {GoalResult} from '../models/goal-result';
import {GoalService} from './goal.service';
import {FirebaseDatabaseService} from './firebase-database.service';
import {AuthService} from './auth.service';

@Injectable()
export class GoalResultService extends BackendDatabaseService<GoalResult> {
  protected entityName = 'goal-result';
  protected entityModel = GoalResult;

  constructor(
    private goalService: GoalService,
    protected authService: AuthService,
    protected storageService: FirebaseDatabaseService
  ) {
    super(authService, storageService);
  }

  public getListForGoal(id: string) {
    return this.getList(ref => ref.where('goalId', '==', id));
  }
}
