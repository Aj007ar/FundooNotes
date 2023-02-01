import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from 'src/app/app-routing.module';


import { SigninComponent } from './signin.component';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninComponent ],
      imports: [ReactiveFormsModule, HttpClientModule, MatSnackBarModule, AppRoutingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
//   it(`component should have title 'Fundoo'`,(() => {
//     const fixture = TestBed.createComponent(SigninComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app.title).toEqual('Fundoo');
// }));
});
