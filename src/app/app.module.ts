import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ServicesModule } from './services/services.module';

import { AuthGuard } from './shared';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared';
import { AsideToggleDirective } from './shared';
import { BreadcrumbsComponent } from './shared';

// Routing Module
import { AppRoutingModule } from './app.routing';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,    
    BrowserAnimationsModule,
    ServicesModule.forRoot()
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },AuthGuard],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
