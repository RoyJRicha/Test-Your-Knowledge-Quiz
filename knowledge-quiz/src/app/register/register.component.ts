import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService, AuthenticationService, UserService } from '../services';
import { PasswordValidator } from '../shared/password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loading = false;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService) {}

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

  get f() { return this.registrationForm.controls; }

    onSubmit() {
        this.submitted = true;

        console.log(this.registrationForm);

        // stop here if form is invalid
        /*if (this.registerForm.invalid) {
            console.log('Form Is Invalid');
            return;
        }*/

        this.loading = true;
        console.log('Check 1');
        this.userService.register(this.registrationForm.value)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

}
function first(): import("rxjs").OperatorFunction<Object, unknown> {
  throw new Error('Function not implemented.');
}

