import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IloginRes } from 'src/app/services/userInterface/user-interface.service';
import { UserService } from 'src/app/services/userService/user.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  users = '1'
  hide = true;
  error:any;
  constructor(private formBuilder: FormBuilder, private user: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[A-Z a-z 0-9 +_.-]+@[A-z a-z 0-9 .-]+$")]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      console.log("User login successfully");
      let payload = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      }
      this.user.login(payload).subscribe((response: any) => {
        console.log(response);
        localStorage.setItem('token', response.id)
        localStorage.setItem("fname", response.firstName);
        localStorage.setItem("lname", response.lastName);
        localStorage.setItem("email", response.email);
        this.router.navigateByUrl("/home/notes");
      },
      (error:any) => {
        this.error = error;
      }
      )
    }
  }

}
