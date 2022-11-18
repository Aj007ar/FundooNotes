import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule, MatNavList} from '@angular/material/list';
import { MatIconModule} from '@angular/material/icon';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu'

import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SigninComponent } from './components/signin/signin.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { IconsComponent } from './components/icons/icons.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { DisplayNoteComponent } from './components/display-note/display-note.component';
import { AuthGuardService } from './services/Auth-Guard/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SigninComponent,
    ResetPasswordComponent,
    ForgetPasswordComponent,
    DashboardComponent,
    CreateNoteComponent,
    IconsComponent,
    GetAllNotesComponent,
    DisplayNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,MatSidenavModule,
    MatToolbarModule,MatListModule,
    ReactiveFormsModule,MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,MatTooltipModule,MatSnackBarModule,
    FormsModule,MatMenuModule
    
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
