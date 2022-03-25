import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserShowMenuComponent } from './user-show-menu/user-show-menu.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserRpComponent } from './user-rp/user-rp.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [UserShowMenuComponent, UserDetailsComponent, UserRpComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatCardModule,
    RouterModule,
    FormsModule,
    MatRippleModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class UserShowModule { }
