import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login.routing';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [ LoginRoutingModule ],
  declarations: [    
    LoginComponent,    
  ]
})
export class LoginModule { }
