import { ComponentRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './UI/home/home.component';
import { LoginComponent } from './UI/login/login.component';
import { SignupComponent } from './UI/signup/signup.component';
import { DashbComponent } from './UI/dashb/dashb.component';
import { AdudComponent } from './UI/adud/adud.component';
import { SearchComponent } from './UI/search/search.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    DashbComponent,
    AdudComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '',
        component: HomeComponent

      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'dashb',
        component:DashbComponent
      },
      {
        path: 'adud',
        component: AdudComponent
      },
      {
        path: 'search',
        component: SearchComponent
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
