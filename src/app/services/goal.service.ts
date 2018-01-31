import {Injectable} from '@angular/core';
import {BackendService} from './backend.service';
import {Goal} from '../models/goal';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GoalService extends BackendService<Goal> {
  protected entityName = 'goal';
  protected entityModel = Goal;

  public addGoalResult(id: string, resultId: string): Observable<string> {
    return this.storageService
      .update(`${this.entityName}/${id}/${resultId}`, true)
      .map(() => id);
  }
}
