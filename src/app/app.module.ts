import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {MainComponent} from './components/main/main.component';
import {FirebaseDatabaseService} from './services/firebase-database.service';
import {AuthService} from './services/auth.service';
import {GoalComponent} from './components/goal/goal.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatTabsModule
} from '@angular/material';
import {GoalResultCreationComponent} from './components/goal-result-creation/goal-result-creation.component';
import {GoalResultComponent} from './components/goal-result/goal-result.component';
import {GoalCreationComponent} from './components/goal-creation/goal-creation.component';
import {LoginComponent} from './components/login/login.component';
import {FirebaseUIModule} from 'firebaseui-angular';
import {firebaseUiAuthConfig} from './auth/firebase-ui-auth-config';
import {GoalListComponent} from './components/goal-list/goal-list.component';
import {GoalService} from './services/goal.service';
import {RouterModule} from '@angular/router';
import {GoalResultService} from './services/goal-result.service';
import {FormsModule} from '@angular/forms';
import {GoalResultListComponent} from './components/goal-result-list/goal-result-list.component';
import {routes} from './app.routing';
import {GoalPageComponent} from './components/goal-page/goal-page.component';
import {GoalProgressComponent} from './components/goal-progress/goal-progress.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {FirebaseStorageService} from './services/firebase-storage.service';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {FileInputComponent} from './components/file-input/file-input.component';
import {BackendDatabaseService} from './services/backend-database.service';
import {BackendStorageService} from './services/backend-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalCreationComponent,
    GoalListComponent,
    GoalResultComponent,
    GoalResultCreationComponent,
    LoginComponent,
    MainComponent,
    GoalResultListComponent,
    GoalPageComponent,
    GoalProgressComponent,
    FileInputComponent
  ],
  entryComponents: [
    GoalCreationComponent,
    GoalResultCreationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    NgxChartsModule,
    MatTabsModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  providers: [
    AuthService,
    GoalService,
    FirebaseDatabaseService,
    FirebaseStorageService,
    GoalResultService,
    BackendDatabaseService,
    BackendStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
