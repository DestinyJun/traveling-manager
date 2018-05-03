import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QRCodeModule} from 'angularx-qrcode';
import {QrcodeComponent} from './qrcode.component';
import {QrcodeRoutersModule} from './qrcode.routers.module';
import {ModalModule, PaginationModule} from 'ngx-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChildComponent} from './child/child.component';
@NgModule({
  imports: [
    CommonModule,
    QrcodeRoutersModule,
    ModalModule.forRoot(),
    PaginationModule,
    FormsModule,
    ReactiveFormsModule,
    QRCodeModule
  ],
  declarations: [
    QrcodeComponent,
    ChildComponent
  ],
  entryComponents: [ChildComponent]
})
export class  QrcodeModule { }
