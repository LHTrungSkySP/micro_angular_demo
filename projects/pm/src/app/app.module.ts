import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => import('./remote-entry/remote-entry.module').then(m => m.RemoteEntryModule)
      }
    ])
  ],
})
export class AppModule { }
