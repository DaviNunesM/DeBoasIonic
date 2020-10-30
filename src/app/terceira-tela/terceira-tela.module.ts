import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerceiraTelaPageRoutingModule } from './terceira-tela-routing.module';

import { TerceiraTelaPage } from './terceira-tela.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerceiraTelaPageRoutingModule
  ],
  declarations: [TerceiraTelaPage]
})
export class TerceiraTelaPageModule {}
