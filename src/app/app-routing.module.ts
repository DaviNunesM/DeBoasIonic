import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'segunda-tela',
    loadChildren: () => import('./segunda-tela/segunda-tela.module').then( m => m.SegundaTelaPageModule)
  },
  {
    path: 'terceira-tela',
    loadChildren: () => import('./terceira-tela/terceira-tela.module').then( m => m.TerceiraTelaPageModule)
  },
  {
    path: 'objetivos',
    loadChildren: () => import('./objetivos/objetivos.module').then( m => m.ObjetivosPageModule)
  },
  {
    path: 'objetivo1',
    loadChildren: () => import('./objetivo1/objetivo1.module').then( m => m.Objetivo1PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
