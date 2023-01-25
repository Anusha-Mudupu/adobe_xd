import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PlantsAnimationComponent } from './plants-animation/plants-animation.component';
import { RadioStationComponent } from './radio-station/radio-station.component';
import { RaidoAdventureComponent } from './raido-adventure/raido-adventure.component';
import { TravelLandingPageComponent } from './travel-landing-page/travel-landing-page.component';
import { UserLoginService } from './user-login.service';
import { UserRegisterFormComponent } from './user-register-form/user-register-form.component';

const routes: Routes = [
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
