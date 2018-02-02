import {Injectable} from '@angular/core';
import {BackendService} from './backend.service';
import {Goal} from '../models/goal';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GoalService extends BackendService<Goal> {
  protected entityName = 'goal';
  protected entityModel = Goal;

  public share(id: string) {
    return this.update(id, { shared: true });
  }

  public unshare(id: string) {
    return this.update(id, { shared: false });
  }
}
