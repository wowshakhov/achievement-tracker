import {Injectable} from '@angular/core';
import {BackendDatabaseService} from './backend-database.service';
import {Goal} from '../models/goal';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GoalService extends BackendDatabaseService<Goal> {
  protected entityName = 'goal';
  protected entityModel = Goal;

  public share(id: string) {
    return this.update(id, { shared: true });
  }

  public unshare(id: string) {
    return this.update(id, { shared: false });
  }
}
