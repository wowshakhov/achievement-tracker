import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {GoalResult} from '../models/goal-result';
import {goalResults} from './goal-results';

@Injectable()
export class MockGoalResultService {
  public list(): Observable<Array<GoalResult>> {
    return Observable.of(goalResults);
  }
}
