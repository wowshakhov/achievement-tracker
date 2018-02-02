import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject, QueryFn} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class StorageService {
  constructor(private firebaseStorage: AngularFireDatabase) {}

  public createUniqueId(): string {
    return this.firebaseStorage.createPushId();
  }

  public object(path: string): AngularFireObject<{}> {
    return this.firebaseStorage.object(path);
  }

  public list(path: string, queryFn?: QueryFn): AngularFireList<{}> {
    return this.firebaseStorage.list(path, queryFn);
  }

  public set(path: string, value: any): Observable<any> {
    return Observable.fromPromise(this.firebaseStorage.database.ref(path).set(value));
  }

  public update(path: string, value: any): Observable<any> {
    return Observable.fromPromise(this.firebaseStorage.database.ref(path).update(value));
  }

  public remove(path: string): Observable<any> {
    return Observable.fromPromise(this.firebaseStorage.database.ref(path).remove());
  }
}
