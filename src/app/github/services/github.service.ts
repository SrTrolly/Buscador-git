import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioGit } from '../interfaces/usuarios.interface';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private apiUrl: string = "https://api.github.com";

  constructor(private http: HttpClient) { }

  buscarProyectos(termino: string): Observable<UsuarioGit> {
    const url = `${this.apiUrl}/search/users?q=${termino}`;
    return this.http.get<UsuarioGit>(url);
  }


}
