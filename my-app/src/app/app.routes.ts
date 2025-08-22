import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AllToolsComponent } from './all-tools/all-tools.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'all-tools', component: AllToolsComponent }
];
