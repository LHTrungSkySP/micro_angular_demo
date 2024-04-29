import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VoucherManagementComponent } from './voucher-management.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: VoucherManagementComponent
      }
    ])
  ]
})
export class VoucherManagementModule { }
