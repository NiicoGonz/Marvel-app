import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { InicioComponent } from './inicio/inicio.component';
import { SeriresComponentComponent } from './serires-component/serires-component.component';
import { HomeComponent } from './home/home.component';
import { HeroeComponent } from './heroe/heroe.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    SeriresComponentComponent,
    HomeComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
