import { FechaPipe } from './../../pipes/fecha.pipe';
import { ComponentsModule } from './../../components/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearQuedadaPageRoutingModule } from './crear-quedada-routing.module';

import { CrearQuedadaPage } from './crear-quedada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearQuedadaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CrearQuedadaPage, FechaPipe]
})
export class CrearQuedadaPageModule {}
