import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearQuedadaPage } from './crear-quedada.page';

const routes: Routes = [
  {
    path: '',
    component: CrearQuedadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearQuedadaPageRoutingModule {}
