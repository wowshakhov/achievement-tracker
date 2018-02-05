import {Routes} from '@angular/router';
import {GoalPageComponent} from './components/goal-page/goal-page.component';
import {MainComponent} from './components/main/main.component';

export const routes: Routes = [
  {
    path: 'goal/:id',
    component: GoalPageComponent
  },
  {
    path: '',
    component: MainComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];
