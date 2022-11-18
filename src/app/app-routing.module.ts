import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { SigninComponent } from './components/signin/signin.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { AuthenticationGuard } from './Guard/authentication.guard';

const routes: Routes = [
  {path:'signin', component:SigninComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'forget-password', component:ForgetPasswordComponent},
  {path:'reset-password', component:ResetPasswordComponent},
  {path:'',redirectTo:"/signin",pathMatch:'full'},
  {path:'home', component:DashboardComponent,canActivate:[AuthenticationGuard],
  children:[
    {path:'notes', component:GetAllNotesComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }