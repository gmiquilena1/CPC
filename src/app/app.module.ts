import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpModule, Http, XHRBackend, RequestOptions} from '@angular/http';
import { Router } from '@angular/router';

import { ServicesModule } from './services/services.module';

import { AuthGuard } from './helpers';

//primeng
import {BlockUIModule, GrowlModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './helpers';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './helpers';
import { AsideToggleDirective } from './helpers';
import { BreadcrumbsComponent, BlockLoadingComponent } from './helpers';

// Routing Module
import { AppRoutingModule } from './app.routing';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

import { HttpFactory } from "./helpers/http";
import { NotificationsComponent } from './helpers/components/notifications/notifications.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    BrowserAnimationsModule,
    BlockUIModule,
    GrowlModule,
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
    BlockLoadingComponent,
    NotificationsComponent,
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }, AuthGuard,
  {
    provide: Http,
    useFactory: HttpFactory,
    deps: [XHRBackend, RequestOptions, Router]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
