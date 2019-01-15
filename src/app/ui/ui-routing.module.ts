import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { RegisterComponent } from './auth/register/register.component';
import { QcmComponent } from './qcm/qcm.component';
import { HeaderComponent } from './header/header.component';
const routes: Routes = [
  { path: 'login', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'anduengine/qcm', component: QcmComponent },
  { path: 'ui/header', component: HeaderComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class UiRoutingModule { }
