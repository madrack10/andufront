import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './auth/signin/signin.component';

import { QcmComponent } from './qcm/qcm.component';
import { RegisterComponent } from './auth/register/register.component';
import { UiRoutingModule } from './ui-routing.module';
import { CountdownModule } from 'ngx-countdown';


@NgModule({

  imports: [
    CommonModule,
    UiRoutingModule,
    CountdownModule,
  ],

  declarations: [LayoutComponent, FooterComponent, SigninComponent, RegisterComponent, QcmComponent],
  exports: [LayoutComponent]

})
export class UiModule { }
