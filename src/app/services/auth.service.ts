import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class AuthService {
  constructor(private firebaseAuth: AngularFireAuth) {}
}
