import { RouterModule, Routes } from '@angular/router';
import { FullPageComponent } from './layouts/full-page/full-page.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { NgModule } from '@angular/core';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'accounts',
        loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule)
        // canActivate: [AuthGuard],
        // canActivateChild: [PermissionGuardService]
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
        // canActivate: [AuthGuard],
        // canActivateChild: [PermissionGuardService]
      },

    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/auth/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes, { scrollPositionRestoration: 'enabled', onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
