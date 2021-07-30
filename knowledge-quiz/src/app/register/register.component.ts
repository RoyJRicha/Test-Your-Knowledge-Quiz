import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../shared/password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  registrationForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    userName: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
  }, {validator: PasswordValidator});

  /*registrationForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  });*/


  ngOnInit(): void {
  }

}
