import { Routes } from '@angular/router';

import { HomePageComponent } from '../pages/home.component';
import { AboutPageComponent } from '../pages/about.component';
import {ServicePageComponent} from '../pages/service.component';
import {PortfolioPageComponent} from '../pages/portfolio.component';
import {ContactPageComponent} from '../pages/contact.component';


export const HomeRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'service', component: ServicePageComponent },
  { path: 'portfolio', component: PortfolioPageComponent },
  { path: 'contact', component: ContactPageComponent },
];
