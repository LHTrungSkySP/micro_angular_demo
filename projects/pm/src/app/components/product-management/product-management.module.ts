import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from '../../../../../hrm/src/app/app.routes';
import { RouterModule } from '@angular/router';
import { ProductManagementComponent } from './product-management.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductManagementComponent
      }
    ])
  ]
})
export class ProductManagementModule { }
