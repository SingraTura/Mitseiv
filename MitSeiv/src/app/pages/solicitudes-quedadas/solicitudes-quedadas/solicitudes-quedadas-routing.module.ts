import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitudesQuedadasPage } from './solicitudes-quedadas.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitudesQuedadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudesQuedadasPageRoutingModule {}
