import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private formBuilder: FormBuilder, private user: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[A-Z a-z 0-9 +_.-]+@[A-z a-z 0-9 .-]+$")]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      service: ['advance', Validators.required]
    });
    // localStorage.setItem('SeesionUser',this.users)
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      console.log("User login successfully");
      let payload = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
        service: "advance"
      }
      this.user.login(payload).subscribe((response: any) => {
        console.log(response);
        localStorage.setItem('token', response.id)
        localStorage.setItem("fname", response.firstName);
        localStorage.setItem("lname", response.lastName);
        localStorage.setItem("email", response.email);
        this.router.navigateByUrl("/home/notes");
      }
      )
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
  }

}
