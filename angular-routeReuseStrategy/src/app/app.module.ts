import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { RouteStrategyService } from './services/route-strategy.service';
const routes: Routes = [
  // 默认路由
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login'
    }

  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Home'
    }
  
  },
  {
  path: '**',
   redirectTo: 'ERROR',
   pathMatch: 'full'
  }
   
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: RouteStrategyService }
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {

 }
