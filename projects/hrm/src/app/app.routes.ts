import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./remote-entry/remote-entry.module').then(m => m.RemoteEntryModule)
      }
];
