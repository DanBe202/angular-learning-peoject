import {Routes} from '@angular/router';
import {Company} from './features/company/company';
import {NotFound} from './features/not-found/not-found';
import {Home} from './features/home/home';
import {Timer} from './features/timer/timer';
import {Arrays} from './features/arrays/arrays';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: Home},
  {path: 'arrays', component: Arrays},
  {path: 'items', component: Company},
  {path: 'timer', component: Timer},
  {path: '**', component: NotFound},
]
export default appRoutes;
