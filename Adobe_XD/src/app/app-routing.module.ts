import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PlantsAnimationComponent } from './plants-animation/plants-animation.component';
import { RadioStationComponent } from './radio-station/radio-station.component';
import { TravelLandingPageComponent } from './travel-landing-page/travel-landing-page.component';
import { UserLoginService } from './user-login.service';
import { UserRegisterFormComponent } from './user-register-form/user-register-form.component';

const routes: Routes = [
  {
    path:'plants-animation',component:PlantsAnimationComponent,canActivate:[AuthGuardGuard]
  },
  {path:'user-registration-form',component:UserRegisterFormComponent},
  {path:'loginpage',component:LoginpageComponent},
  {path:'travel-landing-page',component:TravelLandingPageComponent},
  {path:'radio-station', component:RadioStationComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
