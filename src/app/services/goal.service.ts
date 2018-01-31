import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Goal } from '../models/goal';

@Injectable()
export class GoalService extends BackendService<Goal> {
  protected entityName = 'goal';
  protected entityModel = Goal;
}
