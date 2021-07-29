import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-after-register',
  templateUrl: './login-after-register.component.html',
  styleUrls: ['./login-after-register.component.css']
})
export class LoginAfterRegisterComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  registrationForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  /*registrationForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  });*/


  ngOnInit(): void {
  }

}
