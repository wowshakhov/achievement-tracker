import {Photo} from './photo.model';
import {ResultMetric} from './result-metric';
import { BaseModel } from './base.model';

export class GoalResult extends BaseModel {
  public goalId: string;
  public photo: Photo;
  public comment: string;
  public date: Date;
  public resultMetric: ResultMetric;
  public userId: string;
}
