import { Component } from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private authService: AuthService) {}

  public get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }
}
