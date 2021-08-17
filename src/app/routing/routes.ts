import { Routes } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { AboutComponent } from '../nav/about/about.component';
import { ContactComponent } from '../nav/contact/contact.component';
import { HomeComponent } from '../nav/home/home.component';

export const routes : Routes = [
    {path:'home',component: HomeComponent},
    {path:'about',component: AboutComponent},
    {path:'contact',component: ContactComponent},
    {path:'menu',component: MenuComponent},
    {path:'', redirectTo:'/home',pathMatch:'full'},
    {path:'**', redirectTo:'/home',pathMatch:'full'},
    
    ];