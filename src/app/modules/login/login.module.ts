import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login.routing';

//primeng
import { DialogModule, ButtonModule,FileUploadModule,MessagesModule} from 'primeng/primeng';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    DialogModule,
    ButtonModule,
    FileUploadModule,
    MessagesModule    
  ],
  declarations: [    
    LoginComponent,    
  ]
})
export class LoginModule { }
