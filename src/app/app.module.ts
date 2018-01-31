import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {MainComponent} from './components/main/main.component';
import {StorageService} from './services/storage.service';
import {AuthService} from './services/auth.service';
import {GoalComponent} from './components/goal/goal.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatDatepickerModule, MatIconModule, MatInputModule, MatNativeDateModule} from '@angular/material';
import {GoalResultCreationComponent} from './components/goal-result-creation/goal-result-creation.component';
import {GoalResultComponent} from './components/goal-result/goal-result.component';
import {GoalCreationComponent} from './components/goal-creation/goal-creation.component';
import {LoginComponent} from './components/login/login.component';
import {FirebaseUIModule} from 'firebaseui-angular';
import {firebaseUiAuthConfig} from './auth/firebase-ui-auth-config';
import {GoalListComponent} from './components/goal-list/goal-list.component';
import {GoalService} from './services/goal.service';
import {MockGoalResultService} from './mock-services/mock-goal-result.service';
import {GoalResultService} from './services/goal-result.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalCreationComponent,
    GoalListComponent,
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
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    MatIconModule,
  ],
  providers: [
    AuthService,
    GoalService,
    StorageService,
    { provide: GoalResultService, useClass: MockGoalResultService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
