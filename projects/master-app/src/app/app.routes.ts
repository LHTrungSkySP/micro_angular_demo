import { Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
    {
        path: 'test',
        component: TestComponent
    },
    {
        path: 'hrm',
        loadChildren: () => loadRemoteModule({
            type: 'manifest',
            remoteName: 'hrm',
            exposedModule: './Module'
        }).then(m => m.RemoteEntryModule)
    },
    {
        path: 'pm',
        loadChildren: () => loadRemoteModule({
            type: 'manifest',
            remoteName: 'pm',
            exposedModule: './Module'
        }).then(m => m.RemoteEntryModule)
    }
];
