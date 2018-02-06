import {Injectable} from '@angular/core';
import {BackendDatabaseService} from './backend-database.service';
import {GoalResult} from '../models/goal-result';
import {GoalService} from './goal.service';
import {FirebaseDatabaseService} from './firebase-database.service';
import {AuthService} from './auth.service';
import {FirebaseStorageService} from './firebase-storage.service';
import {BackendStorageService} from './backend-storage.service';

@Injectable()
export class GoalResultService {
  protected entityName = 'goal-result';
  protected entityModel = GoalResult;

  constructor(
    private goalService: GoalService,
    protected authService: AuthService,
    protected db: BackendDatabaseService<GoalResult>,
    protected storage: BackendStorageService
  ) {}

  public getListForGoal(id: string) {
    return this.db.getList(ref => ref.where('goalId', '==', id));
  }
}
