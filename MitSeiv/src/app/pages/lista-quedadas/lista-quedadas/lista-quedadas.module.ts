
import { ComponentsModule } from './../../../components/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaQuedadasPageRoutingModule } from './lista-quedadas-routing.module';

import { ListaQuedadasPage } from './lista-quedadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaQuedadasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListaQuedadasPage]
})
export class ListaQuedadasPageModule {}
