  import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Objetivo1PageRoutingModule } from './objetivo1-routing.module';

import { Objetivo1Page } from './objetivo1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Objetivo1PageRoutingModule
  ],
  declarations: [Objetivo1Page]
})
export class Objetivo1PageModule {}
