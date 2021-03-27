import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent implements OnInit {

  IMC: number = null;

  constructor() { }

  ngOnInit(): void {
  }

  calcular(){
    const peso: number = parseFloat(prompt('Insira o valor do peso: '));
    const altura: number = parseFloat(prompt('Insira o valor do altura: '));

    this.IMC = peso / (Math.pow(altura, 2));
  }
}
