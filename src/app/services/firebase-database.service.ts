import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFirestore, QueryFn} from 'angularfire2/firestore';

@Injectable()
export class FirebaseDatabaseService {
  constructor(private firestore: AngularFirestore) {}

  public createUniqueId(): string {
    return this.firestore.createId();
  }

  public object(path: string): Observable<any> {
    return this.firestore.doc(path).valueChanges();
  }

  public list(path: string, queryFn?: QueryFn): Observable<any> {
    return this.firestore.collection(path, queryFn).valueChanges();
  }

  public set(path: string, value: any): Observable<void> {
    return Observable.fromPromise(this.firestore.doc(path).set(value));
  }

  public update(path: string, value: any): Observable<void> {
    return Observable.fromPromise(this.firestore.doc(path).update(value));
  }

  public remove(path: string): Observable<void> {
    return Observable.fromPromise(this.firestore.doc(path).delete());
  }
}
