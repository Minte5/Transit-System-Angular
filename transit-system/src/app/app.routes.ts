import { Routes } from '@angular/router';
import { MainTransitComponent } from './transit/main/main.component';

export const routes: Routes = [
  { path: 'transit', component: MainTransitComponent },
  { path: '', redirectTo: '/transit', pathMatch: 'full' }
];
