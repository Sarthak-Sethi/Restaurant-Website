import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { RatingComponent } from './rating/rating.component';
import { DishserviceService } from './services/dishservice.service';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './nav/home/home.component';
import { ChefletterComponent } from './nav/chefletter/chefletter.component';
import { ContactComponent } from './nav/contact/contact.component';
import { RoutingModule } from './routing/routing.module';
import { PromotionService } from './services/promotion.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TodayspecialComponent } from './nav/home/todayspecial/todayspecial.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContactComponent,
    DishdetailComponent,
    RatingComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ChefletterComponent,
    TodayspecialComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    RoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DishserviceService,PromotionService],
  bootstrap: [AppComponent]
})


export class AppModule { }
