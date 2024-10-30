import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { PrintersComponentComponent } from './printers-component/printers-component.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details',
  },
  {
    path: 'printers',
    component: PrintersComponentComponent,
    title: 'Printers page',
  },
  {
    path: 'contact',
    component: ContactUsComponent,
    title: 'Contact us page',
  },
  {
    path: 'about',
    component: AboutUsComponent,
    title: 'About us page',
  },
];

export default routeConfig;
