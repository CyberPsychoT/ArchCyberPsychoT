import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LightdmPageRoutingModule } from './lightdm-routing.module';

import { LightdmPage } from './lightdm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LightdmPageRoutingModule
  ],
  declarations: [LightdmPage]
})
export class LightdmPageModule {}
