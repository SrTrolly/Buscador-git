import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { UsuarioGit, Item } from '../../interfaces/usuarios.interface';

@Component({
  selector: 'app-por-usuarios',
  templateUrl: './por-usuarios.component.html',
  styles: [
  ]
})
export class PorUsuariosComponent implements OnInit {

  termino: string = ""
  hayError: boolean = false;
  proyectos!: Item[];

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.githubService.buscarProyectos(this.termino).subscribe(resp => {
      if (resp.items.length === 0) {
        console.log("arreglo vacio")
        this.hayError = true;
      }
      console.log(resp.items)
      this.proyectos = resp.items;

    })
  }

}
