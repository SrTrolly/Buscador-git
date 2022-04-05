import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorUsuariosComponent } from './github/pages/por-usuarios/por-usuarios.component';
import { VerUsuarioComponent } from './github/pages/ver-usuario/ver-usuario.component';

const routes: Routes = [
  {
    path: "",
    component: PorUsuariosComponent,
    pathMatch: "full"
  },
  {
    path: "usuario/:id",
    component: VerUsuarioComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
