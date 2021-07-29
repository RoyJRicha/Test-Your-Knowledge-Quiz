import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginAfterRegisterComponent } from './login-after-register/login-after-register.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
 

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login-after-register', component: LoginAfterRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, LoginComponent, RegisterComponent, LoginAfterRegisterComponent]
  