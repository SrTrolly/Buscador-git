import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../interfaces/usuarios.interface';

@Component({
  selector: 'app-usuarios-table',
  templateUrl: './usuarios-table.component.html',
  styles: [
  ]
})
export class UsuariosTableComponent implements OnInit {

  @Input() proyectos: Item[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
