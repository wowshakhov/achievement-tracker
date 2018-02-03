import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject, QueryFn} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FirebaseDatabaseService {
  constructor(private firebaseDatabase: AngularFireDatabase) {}

  public createUniqueId(): string {
    return this.firebaseDatabase.createPushId();
  }

  public object(path: string): Observable<any> {
    return this.firebaseDatabase.object(path).valueChanges();
  }

  public list(path: string, queryFn?: QueryFn): Observable<any> {
    return this.firebaseDatabase.list(path, queryFn).valueChanges();
  }

  public set(path: string, value: any): Observable<void> {
    return Observable.fromPromise(this.firebaseDatabase.database.ref(path).set(value));
  }

  public update(path: string, value: any): Observable<void> {
    return Observable.fromPromise(this.firebaseDatabase.database.ref(path).update(value));
  }

  public remove(path: string): Observable<void> {
    return Observable.fromPromise(this.firebaseDatabase.database.ref(path).remove());
  }
}
