import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitudesQuedadasPageRoutingModule } from './solicitudes-quedadas-routing.module';

import { SolicitudesQuedadasPage } from './solicitudes-quedadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitudesQuedadasPageRoutingModule
  ],
  declarations: [SolicitudesQuedadasPage]
})
export class SolicitudesQuedadasPageModule {}
