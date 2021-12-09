import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetPaswwordPageRoutingModule } from './reset-paswword-routing.module';

import { ResetPaswwordPage } from './reset-paswword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetPaswwordPageRoutingModule
  ],
  declarations: [ResetPaswwordPage]
})
export class ResetPaswwordPageModule {}
