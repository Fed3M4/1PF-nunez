import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialFlatModule } from './modules/material-flat/material-flat.module';
import { AlumnosComponent } from './componentes/alumnos/alumnos.component';
import { ABMComponent } from './componentes/abm/abm.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    AlumnosComponent,
    ABMComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialFlatModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
