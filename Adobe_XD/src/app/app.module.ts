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
import { DmantzTechnologiesComponent } from './dmantz-technologies/dmantz-technologies.component';
import { DmantzHomePageComponent } from './dmantz-home-page/dmantz-home-page.component';
import { HouseWebpageComponentComponent } from './house-webpage-component/house-webpage-component.component';
import { HouseFeaturesComponent } from './house-features/house-features.component';
import { HouseServiceComponent } from './house-service/house-service.component';
import { HouseContactComponent } from './house-contact/house-contact.component';
import { ViewParentComponent } from './view-parent/view-parent.component';
import { ViewChildComponent } from './view-child/view-child.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantsAnimationComponent,
    TravelLandingPageComponent,
    RadioStationComponent,
    LoginpageComponent,
    UserRegisterFormComponent,
    RaidoAdventureComponent,
    DmantzTechnologiesComponent,
    DmantzHomePageComponent,
    HouseWebpageComponentComponent,
    HouseFeaturesComponent,
    HouseServiceComponent,
    HouseContactComponent,
    ViewParentComponent,
    ViewChildComponent,
 
    
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
