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
    const path = `${params.config.entityName}/${id}`;
    const value = { ...params.object, id };

    return this.databaseService
      .set(path, value)
      .map(() => id);
  }

  public remove(params: { id: string, config: IDatabaseServiceConfig<M> }): Observable<void> {
    const path = `${params.config.entityName}/${params.id}`;

    return this.databaseService.remove(path);
  }

  public update(params: { id: string, value: any, config: IDatabaseServiceConfig<M> }): Observable<void> {
    const path = `${params.config.entityName}/${params.id}`;

    return this.databaseService.update(path, params.value);
  }

  public get(params: { id: string, config: IDatabaseServiceConfig<M> }): Observable<M> {
    const path = `${params.config.entityName}/${params.id}`;

    return this.databaseService
      .object(path)
      .map(result => this.makeModel(result, params.config.entityModel));
  }

  public getList(params: { queryFn?: QueryFn, config: IDatabaseServiceConfig<M> }): Observable<Array<M>> {
    return this.databaseService
      .list(params.config.entityName, params.queryFn)
      .map(result => result.map(object => this.makeModel(object, params.config.entityModel)));
  }

  private makeModel(object: any, entityModel: { new(params: any): M }): M {
    return new entityModel(object);
  }
}
