import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BaseModel} from '../models/base.model';
import {FirebaseDatabaseService} from './firebase-database.service';
import {QueryFn} from 'angularfire2/firestore';
import {AuthService} from './auth.service';

export interface IDatabaseServiceConfig<M> {
  entityName: string;
  entityModel: { new(params: any): M };
}

@Injectable()
export class BackendDatabaseService<M extends BaseModel> {

  constructor(
    protected authService: AuthService,
    protected databaseService: FirebaseDatabaseService
  ) {}

  public create(params: { object: any, config: IDatabaseServiceConfig<M> }): Observable<string> {
    const id = this.databaseService.createUniqueId();
    return this.databaseService.set(`${params.config.entityName}/${id}`, { ...params.object, id }).map(() => id);
  }

  public remove(params: { id: string, config: IDatabaseServiceConfig<M> }): Observable<void> {
    return this.databaseService.remove(`${params.config.entityName}/${id}`);
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
