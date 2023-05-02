import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./core/modules/pages/auth.module').then(x => x.AuthModule),
    data: { preload: true }
  },
  {
    path: 'panda',
    loadChildren: () => import('./core/modules/pages/dashboard.module').then(x => x.DashboardModule),
    data: { preload: true }
  },
  {
    path: 'layoutlar',
    loadChildren: () => import('./core/modules/pages/layoutlar.module').then(x => x.LayoutlarModule),
    data: { preload: true }
  },
  {
    path: 'componentler',
    loadChildren: () => import('./core/modules/pages/componentler.module').then(x => x.ComponentlerModule),
    data: { preload: true }
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
