import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home.component';
import {LoginGuard} from '../shared/login.guard';
const homeRoutes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {path: '', redirectTo: 'main', pathMatch: 'full'},
      {path: 'main', loadChildren: 'app/business/main/main.module#MainModule', canActivate: [LoginGuard]},
      {path: 'qrcode/:id/:number', loadChildren: 'app/business/qrcode/qrcode.module#QrcodeModule', canActivate: [LoginGuard]},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutersModule {}
