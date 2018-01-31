import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {
  constructor(private firebaseAuth: AngularFireAuth) {}

  public get isLoggedIn(): boolean {
    return !!this.firebaseAuth.auth.currentUser;
  }
}
