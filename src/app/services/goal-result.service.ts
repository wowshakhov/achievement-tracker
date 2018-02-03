import {Injectable} from '@angular/core';
import {BackendDatabaseService} from './backend-database.service';
import {GoalResult} from '../models/goal-result';
import {GoalService} from './goal.service';
import {FirebaseDatabaseService} from './firebase-database.service';

@Injectable()
export class GoalResultService extends BackendDatabaseService<GoalResult> {
  protected entityName = 'goal-result';
  protected entityModel = GoalResult;

  constructor(
    private goalService: GoalService,
    protected storageService: FirebaseDatabaseService
  ) {
    super(storageService);
  }

  public getListForGoal(id: string) {
    return this.getList(ref => ref.orderByChild('goalId').equalTo(id));
  }
}
