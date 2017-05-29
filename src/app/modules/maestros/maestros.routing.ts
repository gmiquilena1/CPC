import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { TipoProductoComponent } from './tipo-producto/tipo-producto.component';
import { UnidadesMedidaComponent } from './unidades-medida/unidades-medida.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Maestros'
    },
    children: [
      {
        path: 'tipo-producto',
        component: TipoProductoComponent,
        data: {
          title: 'Tipos de Producto'
        }
      },
      {
        path: 'unidades-medida',
        component: UnidadesMedidaComponent,
        data: {
          title: 'Unidades de Medida'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaestrosRoutingModule {}