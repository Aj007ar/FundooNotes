import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+=-]).{8,}$")]],
      confirmPassword: ['', Validators.required],

    });
  }
  get f() { return this.resetForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.resetForm.valid) {
      console.log("Password reset successfully");
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.resetForm.value))
  }
}
function MustMatch(password: string, confirmPassword: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[password];
    const matchingControl = formGroup.controls[confirmPassword];

    if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
      // return if another validator has already found an error on the matchingControl
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}
