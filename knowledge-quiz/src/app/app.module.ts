import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginAfterRegisterComponent } from './login-after-register/login-after-register.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ViewSubjectsComponent } from './view-subjects/view-subjects.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LoginAfterRegisterComponent,
    NavigationBarComponent,
    ViewSubjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
