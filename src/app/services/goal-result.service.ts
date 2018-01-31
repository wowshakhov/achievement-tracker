import {Injectable} from '@angular/core';
import {BackendService} from './backend.service';
import {GoalResult} from '../models/goal-result';
import {Observable} from 'rxjs/Observable';
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

  public create(object: { goalId: string } & any): Observable<string> {
    return super.create(object)
      .switchMap(id => this.goalService.addGoalResult(id, object.goalId));
  }
}
