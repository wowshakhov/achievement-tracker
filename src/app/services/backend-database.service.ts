import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BaseModel} from '../models/base.model';
import {FirebaseDatabaseService} from './firebase-database.service';
import {QueryFn} from 'angularfire2/database';

@Injectable()
export abstract class BackendDatabaseService<M extends BaseModel> {
  protected abstract entityName: string;
  protected abstract entityModel: { new(params: any): M };

  constructor(protected databaseService: FirebaseDatabaseService) {}

  public create(object: any): Observable<string> {
    const id = this.databaseService.createUniqueId();
    return this.databaseService.set(`${this.entityName}/${id}`, { ...object, id }).map(() => id);
  }

  public remove(id: string): Observable<void> {
    return this.databaseService.remove(`${this.entityName}/${id}`);
  }

  public update(id: string, value: any): Observable<void> {
    return this.databaseService.update(`${this.entityName}/${id}`, value);
  }

  public get(id: string): Observable<M> {
    return this.databaseService
      .object(`${this.entityName}/${id}`)
      .map(result => this.makeModel(result));
  }

  public getList(queryFn?: QueryFn): Observable<Array<M>> {
    return this.databaseService
      .list(this.entityName, queryFn)
      .map(result => result.map(object => this.makeModel(object)));
  }

  private makeModel(object: any): M {
    return new this.entityModel(object);
  }
}
