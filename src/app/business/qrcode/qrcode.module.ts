import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QRCodeModule} from 'angularx-qrcode';
import {QrcodeComponent} from './qrcode.component';
import {QrcodeRoutersModule} from './qrcode.routers.module';
import {ModalModule, PaginationModule} from 'ngx-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    QrcodeRoutersModule,
    ModalModule.forRoot(),
    PaginationModule,
    ReactiveFormsModule,
    QRCodeModule
  ],
  declarations: [
    QrcodeComponent
  ],
  providers: [],
})
export class  QrcodeModule { }
