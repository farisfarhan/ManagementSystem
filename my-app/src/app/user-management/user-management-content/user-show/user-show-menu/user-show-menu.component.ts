import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-show-menu',
  templateUrl: './user-show-menu.component.html',
  styleUrls: ['./user-show-menu.component.css']
})
export class UserShowMenuComponent implements OnInit {

  constructor(public route:ActivatedRoute,
              private userService: UserService
    ) { }

  ngOnInit(): void {
    // let id = +this.route.snapshot.paramMap.get('id');
    // console.log('id1' + id);
    // console.log("snapshot showmenu: " + this.route.snapshot.pathFromRoot)
    // if(id){
    //   this.userService.setUserViewRequest(id);
    // }

    let id2 = this.route.snapshot.paramMap.get('id');
    // console.log('id: ' + id2);

    if(id2){
      this.userService.setUserViewRequest2(id2);
    }
  }

}
