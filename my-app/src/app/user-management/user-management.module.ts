import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { ManagementMenuComponent } from './management-menu/management-menu.component';
import { UserManagementContentModule } from './user-management-content/user-management-content.module';
import { MatDividerModule } from '@angular/material/divider';
import { UserShowModule } from './user-management-content/user-show/user-show.module';
import { MatRippleModule } from '@angular/material/core';
// import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule } from '@angular/material/table' 
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ ManagementMenuComponent],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    UserManagementContentModule,
    MatDividerModule,
    UserShowModule,
    MatRippleModule,
    MatTableModule,
    FormsModule
    // NgbModule,
    // NgbModal
  ]
})
export class UserManagementModule { }
