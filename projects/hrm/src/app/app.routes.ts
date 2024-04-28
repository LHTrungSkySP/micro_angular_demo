import { Routes } from '@angular/router';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./remote-entry/remote-entry.module').then(m => m.RemoteEntryModule)
      }
];
