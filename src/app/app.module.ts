import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {MainComponent} from  './main/main.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import {HeaderComponent} from './header/header.component';
import { FooterComponent } from './footer/footer.component';
const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  { path: '**', component: ErrorPageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
