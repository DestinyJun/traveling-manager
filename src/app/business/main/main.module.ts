import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlertModule, ModalModule} from 'ngx-bootstrap';
import { FileUploadModule } from 'ng2-file-upload';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MainComponent} from './main.component';
import {MainRoutersModule} from './main.routers.module';
import { ExportAsModule } from 'ngx-export-as';

@NgModule({
  imports: [
    CommonModule,
    MainRoutersModule,
    ModalModule.forRoot(),
    FileUploadModule,
    AlertModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ExportAsModule
  ],
  declarations: [
    MainComponent,
  ],
  providers: [],
})
export class MainModule { }
