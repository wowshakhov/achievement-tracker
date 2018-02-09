import {Injectable} from '@angular/core';
import {BackendDatabaseService} from './backend-database.service';
import {GoalResult} from '../models/goal-result';
import {GoalService} from './goal.service';
import {AuthService} from './auth.service';
import {BackendStorageService} from './backend-storage.service';
import {ResultMetric} from '../models/result-metric';

export interface IGoalResultCreationParams {
  goalId: string;
  userId: string;
  photo?: File;
  comment?: string;
  date?: Date;
  resultMetric?: ResultMetric;
}

@Injectable()
export class GoalResultService {
  private config = {
    entityName: 'goal-result',
    entityModel: GoalResult,
  };

  constructor(
    private goalService: GoalService,
    protected authService: AuthService,
    protected db: BackendDatabaseService<GoalResult>,
    protected storage: BackendStorageService
  ) {}

  public create(object: IGoalResultCreationParams) {
    return this.db.create({
      object,
      config: this.config,
    });
  }

  public remove(id: string) {
    return this.db.remove({
      id,
      config: this.config,
    });
  }

  public getListForGoal(id: string) {
    return this.db.getList({
      queryFn: ref => ref.where('goalId', '==', id),
      config: this.config,
    });
  }
}
