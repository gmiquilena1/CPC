import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AuthService } from './auth.service';
import { ProductosService } from './productos.service';


@NgModule({
  //declarations: [HighlightDirective],
  //exports: [ HighlightDirective ]
  imports:[HttpModule]
})
export class ServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [AuthService,ProductosService]
    };
  }
}