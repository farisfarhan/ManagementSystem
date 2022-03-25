import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { User2 } from 'src/app/models/user2.model';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User2 = {
    _id: "",
    username: "",
    password: "",
    email: ""
  };
  constructor(private userService: UserService, private _router: Router) { }

  ngOnInit(): void {

    
  }

  createUser(data){
    this.userService.create(data).subscribe(
      res =>{
        console.log('User Create Success');
        
      },
      err => {
        console.log(err);
      },
      () => {
        this._router.navigate(['/userManagement/userList']);
      }
    )
  }

  onSubmit2(form2: NgForm){
    this.createUser(form2.value);
  }
}
