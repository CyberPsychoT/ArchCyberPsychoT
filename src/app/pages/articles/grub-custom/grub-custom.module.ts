import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrubCustomPageRoutingModule } from './grub-custom-routing.module';

import { GrubCustomPage } from './grub-custom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrubCustomPageRoutingModule
  ],
  declarations: [GrubCustomPage]
})
export class GrubCustomPageModule {}
