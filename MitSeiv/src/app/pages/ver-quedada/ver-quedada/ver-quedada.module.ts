import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerQuedadaPageRoutingModule } from './ver-quedada-routing.module';

import { VerQuedadaPage } from './ver-quedada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerQuedadaPageRoutingModule
  ],
  declarations: [VerQuedadaPage]
})
export class VerQuedadaPageModule {}
