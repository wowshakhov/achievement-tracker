import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Goal } from '../models/goal';
import {GoalResult} from '../models/goal-result';

@Injectable()
export class GoalResultService extends BackendService<GoalResult> {
  protected entityName = 'goal-result';
  protected entityModel = GoalResult;
}
