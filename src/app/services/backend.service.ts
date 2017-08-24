import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BaseModel } from '../models/base.model';
import { StorageService } from './storage.service';

@Injectable()
export abstract class BackendService<M extends BaseModel> {
  protected abstract entityName: string;
  protected abstract entityModel: { new(params?): M };

  constructor(protected storageService: StorageService) {}

  public get(id: string): Observable<M> {
    return this.storageService.object(this.getPath(id))
      .map(result => {
        return this.makeModel(result)
      });
  }

  public getList(): Observable<Array<M>> {
    return this.storageService.list(this.entityName)
      .map(resultList => {
        return resultList.map(resultElement => {
          return this.makeModel(resultElement);
        })
      });
  }

  private getPath(id: string): string {
    return `${this.entityName}/${id}`;
  }

  private makeModel(object: any): M {
    return new this.entityModel(object);
  }
}
