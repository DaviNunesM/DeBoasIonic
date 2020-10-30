import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerceiraTelaPage } from './terceira-tela.page';

const routes: Routes = [
  {
    path: '',
    component: TerceiraTelaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerceiraTelaPageRoutingModule {}
