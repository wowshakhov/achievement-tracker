import {Injectable} from '@angular/core';
import {BackendDatabaseService} from './backend-database.service';
import {GoalResult} from '../models/goal-result';
import {BackendStorageService} from './backend-storage.service';
import {ResultMetric} from '../models/result-metric';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

export interface IGoalResultCreationParams {
  goalId: string;
  userId: string;
  comment?: string;
  date?: Date;
  resultMetric?: ResultMetric;
  photo?: File;
}

@Injectable()
export class GoalResultService {
  private config = {
    entityName: 'goal-result',
    entityModel: GoalResult,
  };

  constructor(
    protected db: BackendDatabaseService<GoalResult>,
    protected storage: BackendStorageService
  ) {}

  public create(object: IGoalResultCreationParams) {
    return this.db
      .create({
        object: {
          goalId: object.goalId,
          userId: object.userId,
          comment: object.comment || '',
          date: object.date || new Date(),
          resultMetric: object.resultMetric || null,
          photoUrl: object.photo ? 'loading' : null
        },
        config: this.config,
      })
      .switchMap(id => {
        if (object.photo) {
          return this.uploadPhoto(id, object.goalId, object.photo).map(() => id);
        } else {
          return Observable.of(id);
        }
      });
  }

  public remove(id: string) {
    return this.db.remove({ id, config: this.config });
  }

  public getListForGoal(goalId: string) {
    return this.db
      .getList({
        queryFn: ref => ref.where('goalId', '==', goalId),
        config: this.config,
      });
  }

  private uploadPhoto(id: string, goalId: string, photo: File) {
    return this.storage
      .upload(`${goalId}/${id}`, photo)
      .downloadURL()
      .switchMap(photoUrl => {
        return this.db.update({
          id,
          value: { photoUrl },
          config: this.config,
        });
      });
  }
}
