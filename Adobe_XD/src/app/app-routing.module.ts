import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { DmantzHomePageComponent } from './dmantz-home-page/dmantz-home-page.component';
import { DmantzTechnologiesComponent } from './dmantz-technologies/dmantz-technologies.component';
import { HouseContactComponent } from './house-contact/house-contact.component';
import { HouseFeaturesComponent } from './house-features/house-features.component';
import { HouseServiceComponent } from './house-service/house-service.component';
import { HouseWebpageComponentComponent } from './house-webpage-component/house-webpage-component.component';


import { LoginpageComponent } from './loginpage/loginpage.component';
import { PlantsAnimationComponent } from './plants-animation/plants-animation.component';
import { RadioStationComponent } from './radio-station/radio-station.component';
import { RaidoAdventureComponent } from './raido-adventure/raido-adventure.component';
import { TravelLandingPageComponent } from './travel-landing-page/travel-landing-page.component';
import { UserLoginService } from './user-login.service';
import { UserRegisterFormComponent } from './user-register-form/user-register-form.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ViewParentComponent } from './view-parent/view-parent.component';

const routes: Routes = [
  {path:'view-parent',component:ViewParentComponent},
  {path:'view-child',component:ViewChildComponent},
  {path:'house-contact',component:HouseContactComponent},
  {path:'house-service',component:HouseServiceComponent},
  {path:'house-features',component:HouseFeaturesComponent},
  {path:'house-webpage',component:HouseWebpageComponentComponent},
  {path:'Dmantz-home-page',component:DmantzHomePageComponent},
  {path:'Dmantz-Technologies',component:DmantzTechnologiesComponent},
  {
    path:'plants-animation',component:PlantsAnimationComponent
  },
  {path:'user-registration-form',component:UserRegisterFormComponent},
  {path:'loginpage',component:LoginpageComponent},
  {path:'travel-landing-page',component:TravelLandingPageComponent},
  {path:'radio-station', component:RadioStationComponent},
  {path:'raido-adventure',component:RaidoAdventureComponent,canActivate:[AuthGuardGuard]}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
