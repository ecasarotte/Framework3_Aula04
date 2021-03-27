import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { EquacaoComponent } from './equacao/equacao.component';
import { ImcComponent } from './imc/imc.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    EquacaoComponent,
    ImcComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
