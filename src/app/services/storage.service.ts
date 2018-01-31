import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class StorageService {
  constructor(private firebaseStorage: AngularFireDatabase) {}

  public object(path: string): AngularFireObject<{}> {
    return this.firebaseStorage.object(path);
  }

  public list(path: string): AngularFireList<{}> {
    return this.firebaseStorage.list(path);
  }

  public set(path: string, value: any): Observable<any> {
    return Observable.fromPromise(this.firebaseStorage.object(path).set(value));
  }

  public update(path: string, value: any): Observable<any> {
    return Observable.fromPromise(this.firebaseStorage.object(path).update(value));
  }

  public push(path: string, value: any): Observable<any> {
    return Observable.fromPromise(this.firebaseStorage.list(path).push(value));
  }

  public remove(path: string, item: string): Observable<any> {
    return Observable.fromPromise(this.firebaseStorage.list(path).remove(item));
  }
}
