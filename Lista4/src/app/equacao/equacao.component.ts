import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equacao',
  templateUrl: './equacao.component.html',
  styleUrls: ['./equacao.component.css']
})
export class EquacaoComponent implements OnInit {

  x1: number = null;
  x2: number = null;

  constructor() { }

  ngOnInit(): void {
  }

  calcular(): void {
    const a: number = parseFloat(prompt('Insira o valor de "a":'));
    const b: number = parseFloat(prompt('Insira o valor de "b":'));
    const c: number = parseFloat(prompt('Insira o valor de "c":'));

    const delta = Math.pow(b, 2) - 4 * a * c;

    this.x1 = (-b + Math.sqrt(delta)) / 2 * a;
    this.x2 = (-b - Math.sqrt(delta)) / 2 * a;
  }
}
