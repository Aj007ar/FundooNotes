import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { UserService } from 'src/app/services/userService/user.service';


import { SigninComponent } from './signin.component';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninComponent ],
      imports: [ReactiveFormsModule, HttpClientModule, MatSnackBarModule, AppRoutingModule],

    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render Sign In in a h1 tag',(() => {
    const fixture = TestBed.createComponent(SigninComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.nativeElement;
    expect(app.querySelector('h1').textContent).toEqual(' Sign In ');
  }));

  it('should render Use your Fundoo Account in a span tag',(() => {
    const fixture = TestBed.createComponent(SigninComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.nativeElement;
    expect(app.querySelector('span').textContent).toContain('Use your Fundoo Account');
  }));

  it('Check initial form values for login form group', ()=>{
    const loginFormGroup=component.loginForm;
    const loginFormValues={
      email:'',
      password:''
    }
    expect(loginFormGroup.value).toEqual(loginFormValues);
  })
});
