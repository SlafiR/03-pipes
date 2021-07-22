import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
 
import { AppComponent } from './app.component';
 

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es'; //estas lineas de codigo son esenciales para poder modificar de manera global el idioma de nuestras apps
import localeFr from '@angular/common/locales/fr';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContraseniaPipe } from './pipes/contrasenia.pipe';
registerLocaleData(localeEs);
registerLocaleData(localeFr);
 
 
@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ContraseniaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }