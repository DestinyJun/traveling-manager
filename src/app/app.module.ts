import {BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {AppRouterModule} from './app.router.module';
import {AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {GlobalService} from './shared/global.service';
import {ReqService} from './shared/req.service';
import { ExportAsModule } from 'ngx-export-as';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    ExportAsModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [GlobalService, ReqService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
