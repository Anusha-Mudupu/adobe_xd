import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantsAnimationComponent } from './plants-animation/plants-animation.component';
import { TravelLandingPageComponent } from './travel-landing-page/travel-landing-page.component';
import { RadioStationComponent } from './radio-station/radio-station.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HttpClientModule } from '@angular/common/http';
import { UserRegisterFormComponent } from './user-register-form/user-register-form.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RaidoAdventureComponent } from './raido-adventure/raido-adventure.component';
@NgModule({
  declarations: [
    AppComponent,
    PlantsAnimationComponent,
    TravelLandingPageComponent,
    RadioStationComponent,
    LoginpageComponent,
    UserRegisterFormComponent,
    RaidoAdventureComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
