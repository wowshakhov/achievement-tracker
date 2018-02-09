import {ResultMetric} from './result-metric';
import {BaseModel} from './base.model';

export class GoalResult extends BaseModel {
  public goalId: string;
  public userId: string;
  public comment: string;
  public date: Date;
  public resultMetric: ResultMetric;
  public photoUrl: string | null;


  public ownedBy(userId: string): boolean {
    return this.userId === userId;
  }
}
