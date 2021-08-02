import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginAfterRegisterComponent } from './login-after-register/login-after-register.component';
import { LoginComponent } from './login/login.component';
import { QuizInfoComponent } from './quiz-info/quiz-info.component';
import { RegisterComponent } from './register/register.component';
import { ViewSubjectsComponent } from './view-subjects/view-subjects.component';
 

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'subjects', component: ViewSubjectsComponent },
  { path: 'login-after-register', component: LoginAfterRegisterComponent },
  { path: 'quiz-info', component: QuizInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, LoginComponent, RegisterComponent, ViewSubjectsComponent, LoginAfterRegisterComponent, QuizInfoComponent]
  