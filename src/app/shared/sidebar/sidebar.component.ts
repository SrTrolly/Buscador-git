import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../github/services/github.service';
import { UsuarioInfo } from '../../github/interfaces/perfil.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  registros: UsuarioInfo[] = [];

  constructor(private gitService: GithubService) { }

  ngOnInit(): void {
    this.registros = this.gitService.registros;
  }

}
