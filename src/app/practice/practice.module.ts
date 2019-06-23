import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticeComponent } from './practice.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [PracticeComponent, LoginComponent, RegisterComponent],
  exports: [PracticeComponent],
  imports: [
    CommonModule
  ]
})
export class PracticeModule { }
