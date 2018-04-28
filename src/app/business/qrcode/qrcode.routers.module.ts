import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QrcodeComponent} from './qrcode.component';
const mainRoutes: Routes = [
  {path: '', component: QrcodeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule],
  providers: []
})
export class QrcodeRoutersModule {}
