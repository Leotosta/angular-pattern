import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.css']
})
export class ComboComponent implements OnInit {

  valorAtual = '';
  valorFinal = '';
  nome = 'x';

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(event: KeyboardEvent) {
    this.valorAtual = ((<HTMLInputElement>event.target).value); 
  }

  salvarCombo(value: string) {
    console.log(value);
    this.valorFinal = value;
  }

}
