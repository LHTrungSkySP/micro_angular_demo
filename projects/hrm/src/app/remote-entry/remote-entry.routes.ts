import { Routes } from '@angular/router';

export const routeEntry: Routes = [
    {
        path: '',
        children: [
            {
                path: 'account',
                loadChildren: () => import('../components/account/account.module').then(m => m.AccountModule)
            },
            {
                path: 'company',
                loadChildren: () => import('../components/company/company.module').then(m => m.CompanyModule)
            }
        ]

    }
]
