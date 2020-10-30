import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegundaTelaPage } from './segunda-tela.page';

const routes: Routes = [
  {
    path: '',
    component: SegundaTelaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegundaTelaPageRoutingModule {}
