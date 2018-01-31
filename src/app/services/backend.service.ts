import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BaseModel} from '../models/base.model';
import {StorageService} from './storage.service';

@Injectable()
export abstract class BackendService<M extends BaseModel> {
  protected abstract entityName: string;
  protected abstract entityModel: { new(id: string, params: any): M };

  constructor(protected storageService: StorageService) {}

  public create(object: any): Observable<string> {
    const id = this.storageService.createUniqueId();
    return this.storageService.set(`${this.entityName}/${id}`, object).map(() => id);
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
      .map(result => this.makeModel(id, result));
  }

  public getList(): Observable<Array<M>> {
    return this.storageService
      .object(this.entityName)
      .valueChanges()
      .map(result => {
        if (!result) {
          return [];
        }

        return Object.keys(result).reduce((list, id) => {
          return list.concat(this.makeModel(id, result[id]));
        }, []);
      });
  }

  private makeModel(id: string, object: any): M {
    return new this.entityModel(id, object);
  }
}
