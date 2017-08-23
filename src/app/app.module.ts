import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {MainComponent} from './components/main/main.component';
import {StorageService} from './services/storage.service';
import {AuthService} from './services/auth.service';
import {GoalComponent} from './components/goal/goal.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCardModule, MdDatepickerModule, MdInputModule, MdNativeDateModule} from '@angular/material';
import {GoalResultCreationComponent} from './components/goal-result-creation/goal-result-creation.component';
import {GoalResultComponent} from './components/goal-result/goal-result.component';
import {GoalCreationComponent} from './components/goal-creation/goal-creation.component';
import {LoginComponent} from './components/login/login.component';
import {FirebaseUIModule} from 'firebaseui-angular';
import {firebaseUiAuthConfig} from './auth/firebase-ui-auth-config';

@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalCreationComponent,
    GoalResultComponent,
    GoalResultCreationComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    MdButtonModule,
    MdCardModule,
    MdDatepickerModule,
    MdInputModule,
    MdNativeDateModule
  ],
  providers: [
    AuthService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
