import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutersModule} from './home.routers.module';
import {HomeComponent} from './home.component';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {FooterComponent} from './footer/footer.component';
import {LoginGuard} from '../shared/login.guard';
import {ModalModule} from 'ngx-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutersModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  ],
  providers: [LoginGuard],
  bootstrap: []
})
export class HomeModule {}
