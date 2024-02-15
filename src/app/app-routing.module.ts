import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './components/listar/listar.component';
import { NuevoComponent } from './components/nuevo/nuevo.component';
import { EditarComponent } from './components/editar/editar.component';

const routes: Routes = [
  {path : 'listar' , component : ListarComponent },
  {path : 'nuevo' , component : NuevoComponent },
  {path : 'editar/:id' , component : EditarComponent },
  { path: '**', pathMatch: 'full' , redirectTo: 'listar' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
