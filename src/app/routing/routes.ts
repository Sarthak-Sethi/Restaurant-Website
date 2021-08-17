import { Routes } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { ChefletterComponent } from '../nav/chefletter/chefletter.component';
import { ContactComponent } from '../nav/contact/contact.component';
import { HomeComponent } from '../nav/home/home.component';

export const routes : Routes = [
    {path:'home',component: HomeComponent},
    {path:'chefletter',component: ChefletterComponent},
    {path:'contact',component: ContactComponent},
    {path:'menu',component: MenuComponent},
    {path:'', redirectTo:'/home',pathMatch:'full'},
    {path:'**', redirectTo:'/home',pathMatch:'full'},
    
    ];