import {Routes} from '@angular/router';
import {CompanyComponent} from './components/company/company.component';
import {NotFoundComponent} from './components/not-found.compoonent/not-found.component';
import {Home} from './components/home/home.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: Home},
  {path: 'items', component: CompanyComponent},
  {path: '**', component: NotFoundComponent}
]
export default appRoutes;
