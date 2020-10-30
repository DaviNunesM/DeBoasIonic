import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Objetivo1Page } from './objetivo1.page';

const routes: Routes = [
  {
    path: '',
    component: Objetivo1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Objetivo1PageRoutingModule {}
