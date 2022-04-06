import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioGit } from '../interfaces/usuarios.interface';
import { UsuarioInfo } from '../interfaces/perfil.interface';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private apiUrl: string = "https://api.github.com";
  public registros: UsuarioInfo[] = []




  constructor(private http: HttpClient) { }

  buscarProyectos(termino: string): Observable<UsuarioGit> {
    const url = `${this.apiUrl}/search/users?q=${termino}`;
    return this.http.get<UsuarioGit>(url);
  }

  buscarUsuario(id: string): Observable<UsuarioInfo> {
    const url = `${this.apiUrl}/users/${id}`
    return this.http.get<UsuarioInfo>(url);
  }

  registrar(usuario: UsuarioInfo) {
    if (!this.registros.includes(usuario)) {
      this.registros.unshift(usuario);
      this.registros.slice(0, 10);

    }
  }
}

