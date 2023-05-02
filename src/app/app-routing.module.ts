import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PartnerComponent } from './components/partner/partner.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { ReportComponent } from './components/report/report.component';
import { UserComponent } from './components/user/user.component';
import { FdashboardComponent } from './fcomponents/fdashboard/fdashboard.component';
import { FprofileComponent } from './fcomponents/fprofile/fprofile.component';
import { FprogramsComponent } from './fcomponents/fprograms/fprograms.component';
import { FreportComponent } from './fcomponents/freport/freport.component';

const routes: Routes = [
  {
    component:LoginComponent,
    path:'login'
  },
  {
    component:DashboardComponent,
    path:'dashboard'
  },
  {
    component:EditprofileComponent,
    path:'editprofile'
  },
  {
    component:ProfileComponent,
    path:'profile'
  },
  {
    component:PartnerComponent,
    path:'partner'
  },
  {
    component:ForgotComponent,
    path:'forgot'
  },
  {
    component:ProgramsComponent,
    path:'programs'
  },
  {
    component:ReportComponent,
    path:'report'
  },
  {
    component:UserComponent,
    path:'user'
  },
  {
    component:FdashboardComponent,
    path:'fdashboard'
  },
  {
    component:FprofileComponent,
    path:'fprofile'
  },
  {
    component:FprogramsComponent,
    path:'fprograms'
  },
  {
    component:FreportComponent,
    path:'freport'
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
