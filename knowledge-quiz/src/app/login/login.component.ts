import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  currentUserSubject: any;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  registrationForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  users: LoginComponent [] = []

  /*registrationForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  });*/


  ngOnInit(): void {
    console.log('ngOnInit')
    this.http
    .get('http://localhost:3000/users')
    .subscribe(users => {
      console.log('res', users)
      any: users = users
    })
  }

  

}
