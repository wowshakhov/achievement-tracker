import {Injectable} from '@angular/core';
import {BackendDatabaseService} from './backend-database.service';
import {Goal} from '../models/goal';
import {AuthService} from './auth.service';

export interface IGoalCreationParams {
  title: string;
  userId: string;
  description?: string;
  dueDate?: Date;
}

@Injectable()
export class GoalService {
  private config = {
    entityName: 'goal',
    entityModel: Goal,
  };

  constructor(
    private authService: AuthService,
    private db: BackendDatabaseService<Goal>
  ) {}

  public get(id: string) {
    return this.db.get({ id, config: this.config });
  }

  public create(object: IGoalCreationParams) {
    return this.db.create({ object, config: this.config });
  }

  public remove(id: string) {
    return this.db.remove({ id, config: this.config });
  }

  public getUserGoals() {
    return this.db.getList({
      queryFn: ref => ref.where('userId', '==', this.authService.uid),
      config: this.config,
    });
  }

  public getSharedGoals() {
    return this.db.getList({
      queryFn: ref => ref.where('shared', '==', true),
      config: this.config,
    })
      .map(goals => goals.filter(goal => goal.userId !== this.authService.uid));
  }

  public share(id: string) {
    return this.db.update({
      id,
      value: { shared: true },
      config: this.config,
    });
  }

  public unshare(id: string) {
    return this.db.update({
      id,
      value: { shared: false },
      config: this.config,
    });
  }
}
