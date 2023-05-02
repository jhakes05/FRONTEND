import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { PartnerComponent } from './components/partner/partner.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { FprogramsComponent } from './fcomponents/fprograms/fprograms.component';
import { FprofileComponent } from './fcomponents/fprofile/fprofile.component';
import { FdashboardComponent } from './fcomponents/fdashboard/fdashboard.component';
import { FreportComponent } from './fcomponents/freport/freport.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    ProgramsComponent,
    PartnerComponent,
    EditprofileComponent,
    ForgotComponent,
    FprogramsComponent,
    FprofileComponent,
    FdashboardComponent,
    FreportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
