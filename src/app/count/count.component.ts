import { Component, OnInit, Output, EventEmitter, ViewChild, AfterViewInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit, AfterViewInit {

  @Output() totalValue = new EventEmitter();
  @Input() valor = 0;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  decrease() {
    this.totalValue.emit({valor: this.valor})
    return this.valor--
  }

  add() {
    return this.valor++
  }

}
