import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { AlertService, AuthenticationService } from '../services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  currentUserSubject: any;
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl!: string;

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) {}

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

  get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

  

}
function first(): import("rxjs").OperatorFunction<any, unknown> {
  throw new Error('Function not implemented.');
}

