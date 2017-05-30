import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


//primeng
import { MessagesModule,DropdownModule } from 'primeng/primeng';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    DashboardRoutingModule,    
    DropdownModule,
    MessagesModule
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
