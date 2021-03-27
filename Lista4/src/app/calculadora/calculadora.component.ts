import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  soma: number = null;
  subtracao: number = null;
  multiplicacao: number = null;
  divisao: number = null;

  constructor() { }

  ngOnInit(): void {
  }

  public lerECalcular(): void {
    const n1: number = parseFloat(prompt('Insira o primeiro numero'));
    const n2: number = parseFloat(prompt('Insira o segundo numero'));

    this.soma = n1 + n2;
    this.subtracao = n1 - n2;
    this.multiplicacao = n1 * n2;
    this.divisao = n1 / n2;

  }

}
