import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {FirebaseStorageService} from './firebase-storage.service';

@Injectable()
export abstract class BackendStorageService {
  constructor(protected storageService: FirebaseStorageService) {}

  public upload(path: string, data: Blob): Observable<any> {
    return Observable.fromPromise(this.storageService.upload(path, data));
  }

  public download(path: string): Observable<void> {
    return this.storageService.download(path);
  }
}
