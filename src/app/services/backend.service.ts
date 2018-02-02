import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BaseModel} from '../models/base.model';
import {StorageService} from './storage.service';
import {QueryFn} from 'angularfire2/database';

@Injectable()
export abstract class BackendService<M extends BaseModel> {
  protected abstract entityName: string;
  protected abstract entityModel: { new(params: any): M };

  constructor(protected storageService: StorageService) {}

  public create(object: any): Observable<string> {
    const id = this.storageService.createUniqueId();
    return this.storageService.set(`${this.entityName}/${id}`, { ...object, id }).map(() => id);
  }

  public remove(id: string): Observable<void> {
    return this.storageService.remove(`${this.entityName}/${id}`);
  }

  public update(id: string, value: any): Observable<void> {
    return this.storageService.update(`${this.entityName}/${id}`, value);
  }

  public get(id: string): Observable<M> {
    return this.storageService
      .object(`${this.entityName}/${id}`)
      .valueChanges()
      .map(result => this.makeModel(result));
  }

  public getList(queryFn?: QueryFn): Observable<Array<M>> {
    return this.storageService
      .list(this.entityName, queryFn)
      .valueChanges()
      .map(result => result.map(object => this.makeModel(object)));
  }

  private makeModel(object: any): M {
    return new this.entityModel(object);
  }
}
