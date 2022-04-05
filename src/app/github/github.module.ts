import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosTableComponent } from './components/usuarios-table/usuarios-table.component';
import { UsuariosInputComponent } from './components/usuarios-input/usuarios-input.component';
import { UsuarioTableComponent } from './components/usuario-table/usuario-table.component';
import { PorUsuariosComponent } from './pages/por-usuarios/por-usuarios.component';
import { VerUsuarioComponent } from './pages/ver-usuario/ver-usuario.component';



@NgModule({
  declarations: [
    UsuariosTableComponent,
    UsuariosInputComponent,
    UsuarioTableComponent,
    PorUsuariosComponent,
    VerUsuarioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GithubModule { }
