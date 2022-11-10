import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.forgetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[A-Z a-z 0-9 +_.-]+@[A-z a-z 0-9 .-]+$")]],
    });
  }
  get f() { return this.forgetForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.forgetForm.valid) {
      console.log("Email validate successfully");
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.forgetForm.value))
  }

}

