import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "curso",
    component: HomeComponent
  },
  {
    path: "landing",
    component: LandingComponent
  }
];
