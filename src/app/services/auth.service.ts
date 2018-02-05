import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {User} from 'firebase/app';

@Injectable()
export class AuthService {
  constructor(private firebaseAuth: AngularFireAuth) {}

  public get uid(): string | null {
    return this.currentUser && this.currentUser.uid;
  }

  public get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  private get currentUser(): User | null {
    return this.firebaseAuth.auth.currentUser;
  }
}
