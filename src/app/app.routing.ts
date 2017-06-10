import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helpers';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',    
  },
  {
    path: '',
    component: FullLayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'admin',
        loadChildren: './modules/administracion/administracion.module#AdministracionModule'
      },
      {
        path: 'maestros',
        loadChildren: './modules/maestros/maestros.module#MaestrosModule'
      },
      {
        path: 'config',
        loadChildren: './modules/configuracion/configuracion.module#ConfiguracionModule'
      }
    ]
  },
  {
    path: 'login',
    canActivate: [AuthGuard],
    loadChildren: './modules/login/login.module#LoginModule'    
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
