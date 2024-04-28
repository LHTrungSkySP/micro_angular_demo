import { Routes } from '@angular/router';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
    {
        path: 'test',
        component: TestComponent
    },
    {
        path: 'hrm',
        loadChildren: () => import('hrm/hrmModule').then(m=>m.AppModule)
    },
    {
        path: 'pm',
        loadChildren: () => import('pm/pmModule').then(m=>m.TestModule)
    }
];
