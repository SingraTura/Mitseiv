import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerQuedadaPage } from './ver-quedada.page';

const routes: Routes = [
  {
    path: '',
    component: VerQuedadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerQuedadaPageRoutingModule {}
