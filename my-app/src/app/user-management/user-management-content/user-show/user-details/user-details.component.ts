import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { User2 } from 'src/app/models/user2.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  editOrShow:string;
  showRequest:string;
  userId: number;
  userId2: string;
  success: boolean;
  // pathno: number;
  user: User = {
    id: 0,
    name: "",
    email: "",
    phone: "",
    gender: "",
    NRIC: "",
    address: "",
    postCode: "",
    state: ""
  };

  user2: User2 = {
    _id: "",
    username: "",
    password: "",
    email: ""
  }
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {  

    //user1
    // this.userId = this.userService.userIdRequested;
    // this.user = (this.userService.getSpecificUser(this.userService.userIdRequested));
    this.showRequest = this.userService.getShowRequest();
    if (this.showRequest == "show")
    {
      this.editOrShow = "Edit"
    }
    else if (this.showRequest == "edit")
    {
      this.editOrShow = "Show"
    }
   
    //user2
    this.userId2 = this.userService.userIdRequested2;
    this.getOneUser(this.userId2);
    // console.log('idrequest: '+ this.userService.userIdRequested2);
    
  }

  ngAfterViewInit():void{
   
    
    // console.log('after view user2: '  + this.user2);
    // console.log(this.user2);
    
  }

  getUserUpdateValue(data){
    this.userService.updateUserDetails(data).subscribe(
      res =>{
        console.log('User Update Success');
        console.log(data.value)
        this.getOneUser(this.userId2);
        this.success = true;
        this.changeShowRequest();
       setTimeout(()=> {
         this.success = false;
       }, 2000);
      },
      err => {
        console.log(err);
      }),
      ()=>{
        
      }

    console.log("getuservalue")
  }

  getOneUser(id: string){
    this.userService.getSpecificUser2(this.userId2).subscribe(
      res => {
        let user2= res as User2;
        this.setuser2(user2);
      },
      err => 
      {
        console.log(err);
      }
    )
  }

  setuser2(user2: User2){
    this.user2 = user2;
  }



  changeShowRequest(){
    if (this.showRequest == "show")
    {
      this.userService.setShowRequest("edit");
      this.showRequest = this.userService.getShowRequest();
      this.editOrShow = "Show"
    }
    else if (this.showRequest == "edit")
    {
      this.userService.setShowRequest("show");
      this.showRequest = this.userService.getShowRequest();
      this.editOrShow = "Edit"
    }
  }
  onSubmit(form: NgForm){
    console.log(form.value);
    this.getUserUpdateValue(form.value);
 
    
  }
}
