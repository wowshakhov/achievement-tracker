import { BaseModel } from './base.model';

export class Goal extends BaseModel {
  public title: string;
  public description: string;
  public dueDate: Date;
  public sharable: boolean;
}
