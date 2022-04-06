import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Item } from '../../interfaces/usuarios.interface';

@Component({
  selector: 'app-usuarios-table',
  templateUrl: './usuarios-table.component.html',
  styles: [
  ]
})
export class UsuariosTableComponent implements OnInit {

  @Input() proyectos: Item[] = [];
  pageSize = 5;
  desde: number = 0;
  hasta: number = 5;



  constructor() { }

  ngOnInit(): void {
  }

  cambiarPagina(evento: PageEvent) {
    this.desde = evento.pageIndex * evento.pageSize;
    this.hasta = this.desde + evento.pageSize;
  }

}
