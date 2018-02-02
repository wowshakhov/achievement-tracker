import {Injectable} from '@angular/core';
import {BackendService} from './backend.service';
import {GoalResult} from '../models/goal-result';
import {GoalService} from './goal.service';
import {StorageService} from './storage.service';

@Injectable()
export class GoalResultService extends BackendService<GoalResult> {
  protected entityName = 'goal-result';
  protected entityModel = GoalResult;

  constructor(
    private goalService: GoalService,
    protected storageService: StorageService
  ) {
    super(storageService);
  }

  public getListForGoal(id: string) {
    return this.getList(ref => ref.orderByChild('goalId').equalTo(id));
  }
}
