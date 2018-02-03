import {Injectable} from '@angular/core';
import {AngularFireStorage, AngularFireUploadTask} from 'angularfire2/storage';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FirebaseStorageService {
  constructor(private firebaseStorage: AngularFireStorage) {}

  public upload(path: string, data: Blob): AngularFireUploadTask {
    return this.firebaseStorage.upload(path, data);
  }

  public download(path: string): Observable<any> {
    return this.firebaseStorage.ref(path).getDownloadURL();
  }
}
