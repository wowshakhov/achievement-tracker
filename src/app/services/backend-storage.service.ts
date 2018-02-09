import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {FirebaseStorageService} from './firebase-storage.service';
import {AngularFireUploadTask} from 'angularfire2/storage';

@Injectable()
export class BackendStorageService {
  constructor(protected storageService: FirebaseStorageService) {}

  public upload(path: string, data: Blob): AngularFireUploadTask {
    return this.storageService.upload(path, data);
  }
}
