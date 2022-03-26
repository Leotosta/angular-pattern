import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { OutputPropertyComponent } from './output-property/output-property.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit{

  // @ViewChild(OutputPropertyComponent, { static: true }) output !: OutputPropertyComponent;

  valorInicial = 10;

  ngOnInit() {
    // console.log(this.output.valor);
  }

  // onMudouValor(evento: any) {
  //   console.log(evento);
  // }

  onMudouValue(event: Event) {
    console.log(event)
  }



 }
