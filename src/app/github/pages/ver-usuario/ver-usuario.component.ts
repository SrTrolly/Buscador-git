import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../../services/github.service';
import { UsuarioInfo } from '../../interfaces/perfil.interface';

@Component({
  selector: 'app-ver-usuario',
  templateUrl: './ver-usuario.component.html',
  styles: [
  ]
})
export class VerUsuarioComponent implements OnInit {

  public usuario!: UsuarioInfo;



  constructor(private activatedRoute: ActivatedRoute, private githubService: GithubService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {

      this.githubService.buscarUsuario(id).subscribe(usuario => {

        this.githubService.registrar(usuario)
        this.usuario = usuario;
      })
    })

  }



}
