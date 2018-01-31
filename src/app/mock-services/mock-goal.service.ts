import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Goal} from '../models/goal';
import {goals} from './goals';

@Injectable()
export class MockGoalService {
  public list(): Observable<Array<Goal>> {
    return Observable.of(goals);
  }
}
