import {Routes} from '@angular/router';
import {importExpr} from '@angular/compiler/src/output/output_ast';

export const rootRouterConfig: Routes = [
    {
        path: '',
        loadChildren: () => import('./views/main/module').then(m => m.Module)
    },
    {
        path: 'main',
        loadChildren: () => import('./views/main/module').then(m => m.Module)
    },
    {
        path: '**',
        redirectTo: 'main/one'
    }
];

