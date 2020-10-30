import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegundaTelaPageRoutingModule } from './segunda-tela-routing.module';

import { SegundaTelaPage } from './segunda-tela.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegundaTelaPageRoutingModule
  ],
  declarations: [SegundaTelaPage]
})
export class SegundaTelaPageModule {}
