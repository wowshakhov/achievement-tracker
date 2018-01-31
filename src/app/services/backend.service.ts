import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BaseModel} from '../models/base.model';
import {StorageService} from './storage.service';

@Injectable()
export abstract class BackendService<M extends BaseModel> {
  protected abstract entityName: string;
  protected abstract entityModel: { new(id: string, params: any): M };

  constructor(protected storageService: StorageService) {}

  public create(object: any): Observable<void> {
    return this.storageService.set(this.getNewEntityPath(), object);
  }

  public remove(id: string): Observable<void> {
    return this.storageService.remove(this.getPath(id));
  }

  public update(id: string, value: any): Observable<void> {
    return this.storageService.update(this.getPath(id), value);
  }

  public get(id: string): Observable<M> {
    return this.storageService
      .object(this.getPath(id))
      .valueChanges()
      .map(result => {
        return this.makeModel(id, result);
      });
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

  private getPath(id: string): string {
    return `${this.entityName}/${id}`;
  }

  private getNewEntityPath(): string {
    return `${this.entityName}/${this.storageService.createUniqueId()}`;
  }

  private makeModel(id: string, object: any): M {
    return new this.entityModel(id, object);
  }
}
