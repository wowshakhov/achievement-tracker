import {Routes} from '@angular/router';
import {GoalPageComponent} from './components/goal-page/goal-page.component';
import {GoalListComponent} from './components/goal-list/goal-list.component';
import {MainComponent} from './components/main/main.component';

export const routes: Routes = [
  {
    path: 'goal/:id',
    component: GoalPageComponent
  },
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '',
  }
];
