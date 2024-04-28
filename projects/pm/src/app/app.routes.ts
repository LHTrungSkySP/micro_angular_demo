import { Routes } from '@angular/router';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
    {
        path: 'test',
        loadChildren: () => import('./test/test.module').then(m=>m.TestModule)
    }
];
