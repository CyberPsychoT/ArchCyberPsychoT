import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BspwmPageRoutingModule } from './bspwm-routing.module';

import { BspwmPage } from './bspwm.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    BspwmPageRoutingModule,
  ],
  declarations: [BspwmPage],
})
export class BspwmPageModule {}
