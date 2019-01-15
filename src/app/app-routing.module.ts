import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './ui/auth/signin/signin.component';
import { CommonModule } from '@angular/common';
import { UiRoutingModule } from './ui/ui-routing.module';
import { RegisterComponent } from './ui/auth/register/register.component';
import { QcmComponent } from './ui/qcm/qcm.component';


const routes: Routes = [
  { path: 'login', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'anduengine/qcm', component: QcmComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule, UiRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
