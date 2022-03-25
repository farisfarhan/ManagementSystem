import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-management-content/user-list/user-list.component';
import { ManagementMenuComponent } from './management-menu/management-menu.component';
import { UserEditComponent } from './user-management-content/user-edit/user-edit.component';
import { UserDetailsComponent } from './user-management-content/user-show/user-details/user-details.component';
import { UserRpComponent } from './user-management-content/user-show/user-rp/user-rp.component';
import {UserShowMenuComponent} from './user-management-content/user-show/user-show-menu/user-show-menu.component'
import { UserCreateComponent } from './user-management-content/user-create/user-create.component';
import { TestGuard1Guard } from '../test-guard1.guard';
const routes: Routes = [
  {
    path: '',
    component: ManagementMenuComponent,
    canActivate: [TestGuard1Guard],
    loadChildren: () => import('src/app/user-management/user-management-content/user-management-content.module').then(m => m.UserManagementContentModule),
    
    children: [
      { path: '', redirectTo: 'userList' },
      {
        path: 'userList',
        component: UserListComponent,
        children: [
          {
            path: 'userView/:id',
            component: UserShowMenuComponent,
            children: [
              {
                path: '', 
                redirectTo: 'userDetails'
                // outlet: 'details'
              },
              {
                path: 'userDetails', 
                component: UserDetailsComponent,
                // outlet: 'details'
              },
              {
                path: 'RPDetails', 
                component: UserRpComponent,
                // outlet: 'details'
              }
            ]
             
          }
        ]

      },
      { path: 'userEdit', 
        component: UserEditComponent,
        children: [
          {
            path: 'userView/:id',
            component: UserShowMenuComponent,
            children: [
              {
                path: '', 
                redirectTo: 'userDetails'
                // outlet: 'details'
              },
              {
                path: 'userDetails', 
                component: UserDetailsComponent,
                // outlet: 'details'
              },
              {
                path: 'RPDetails', 
                component: UserRpComponent,
                // outlet: 'details'
              }
            ]
            
          }
        ] },

      { path: 'userCreate', 
        component: UserCreateComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
