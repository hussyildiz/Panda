import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./core/modules/auth.module').then(x => x.AuthModule),
    data: { preload: true }
  },
  {
    path: 'main',
    loadChildren: () => import('./core/modules/main.module').then(x => x.MainModule),
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
