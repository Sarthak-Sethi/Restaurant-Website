import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';



import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms'; 

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
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { AddcommentComponent } from './dishdetail/addcomment/addcomment.component';



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
    LoginDialogComponent,
    AddcommentComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    RoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule, 
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule 
  ],
  providers: [DishserviceService,PromotionService,],
  bootstrap: [AppComponent],
  entryComponents:[LoginDialogComponent]
})


export class AppModule { }
