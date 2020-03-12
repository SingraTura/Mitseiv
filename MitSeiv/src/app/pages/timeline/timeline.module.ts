import { ComponentsModule } from './../../components/component.module';
import { FechaPipe } from './../../pipes/fecha.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimelinePageRoutingModule } from './timeline-routing.module';

import { TimelinePage } from './timeline.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimelinePageRoutingModule,
    ComponentsModule
  ],
  declarations: [TimelinePage, FechaPipe]
})
export class TimelinePageModule {}
