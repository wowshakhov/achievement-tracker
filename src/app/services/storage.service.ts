import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class StorageService {
  constructor(private firebaseStorage: AngularFireDatabase) {}

  public get(path: string): Observable<any> {
    return this.firebaseStorage.object(path);
  }

  public getList(path: string): Observable<any> {
    return this.firebaseStorage.list(path);
  }
}
