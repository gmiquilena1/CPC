import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AuthService } from './auth.service';
import { ProductosService } from './productos.service';
import { CentrosCostosService } from './centros-costos.service';
import { ProcesosService } from './procesos.service';
import { LoadingService } from './loading.service';
import { NotificationService } from './notification.service';
import { CargaMasivaService } from './carga-masiva.service';


@NgModule({
  //declarations: [HighlightDirective],
  //exports: [ HighlightDirective ]
  imports:[HttpModule]
})
export class ServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [
        AuthService,
        LoadingService,
        ProductosService,
        CentrosCostosService,
        ProcesosService,
        NotificationService,
        CargaMasivaService        
      ]
    };
  }
}