import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;
  @Output() mudouValor = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  incrementa() {
    this.mudouValor.emit({novoValor: this.valor});
    this.valor++;
  }

  decrementa() {
    this.valor--;
  }

}
