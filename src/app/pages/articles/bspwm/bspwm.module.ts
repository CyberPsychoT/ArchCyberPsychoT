import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BspwmPageRoutingModule } from './bspwm-routing.module';

import { BspwmPage } from './bspwm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BspwmPageRoutingModule
  ],
  declarations: [BspwmPage]
})
export class BspwmPageModule {}
