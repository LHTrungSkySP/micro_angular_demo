import { Routes } from "@angular/router";

export const remoteRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'category-management',
                loadChildren: () => import('../components/category-management/category-management.module').then(m => m.CategoryManagementModule)
            },
            {
                path: 'product-management',
                loadChildren: () => import('../components/product-management/product-management.module').then(m => m.ProductManagementModule)
            },
            {
                path: 'voucher-management',
                loadChildren: () => import('../components/voucher-management/voucher-management.module').then(m => m.VoucherManagementModule)
            }
        ]
    }
] 