import { BaseModel } from './base.model';

export class Goal extends BaseModel {
  public title: string;
  public description: string;
  public dueDate: string;
  public shared: boolean;
  public userId: string;

  public ownedBy(userId: string): boolean {
    return this.userId === userId;
  }
}
