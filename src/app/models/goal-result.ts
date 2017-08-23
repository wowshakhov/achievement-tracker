import {Photo} from './photo.model';
import {ResultMetric} from './result-metric';

export class GoalResult {
  public photo: Photo;
  public comment: string;
  public date: Date;
  public resultMetric: ResultMetric;
}
