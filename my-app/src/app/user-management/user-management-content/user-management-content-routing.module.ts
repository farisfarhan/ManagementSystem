import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'userView',
  //   component: UserViewComponent,
  //   loadChildren: () => import('src/app/user-management/user-show-popup/user-show-popup.module').then(m => m.UserShowPopupModule),
  //   children: [{
  //       path: '',
  //       redirectTo: 'userDetails',
  //       outlet: 'details'
  //     },
  //     {
  //       path: 'userDetails',
  //       component: UserDetailsComponent,
  //       outlet: 'details'
  //     },
  //     {
  //       path: 'RPDetails',
  //       component: RpDetailsComponent,
  //       outlet: 'details'
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementContentRoutingModule { }
