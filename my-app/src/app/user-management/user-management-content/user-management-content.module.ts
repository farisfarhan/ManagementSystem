import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementContentRoutingModule } from './user-management-content-routing.module';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';



import { MatDividerModule } from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { UserShowModule } from './user-show/user-show.module';
import { MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button';
import { UserCreateComponent } from './user-create/user-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { NgSearchPipe } from 'ng-search-pipe';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [UserListComponent, UserEditComponent, UserCreateComponent],
  imports: [
    CommonModule,
    UserManagementContentRoutingModule,
    RouterModule,
    MatDividerModule,
    MatCardModule,
    UserShowModule,
    MatRippleModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    NgSearchPipe,
  ]
})
export class UserManagementContentModule { }
