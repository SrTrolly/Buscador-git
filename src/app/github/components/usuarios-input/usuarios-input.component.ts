import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-usuarios-input',
  templateUrl: './usuarios-input.component.html',
  styles: [
  ]
})
export class UsuariosInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter

  termino: string = "";



  constructor() { }

  ngOnInit(): void {
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }



}
