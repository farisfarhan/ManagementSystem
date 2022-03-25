import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import {MatTableDataSource} from '@angular/material/table';
import { User2 } from 'src/app/models/user2.model';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  closeResult = '';
  mycontent: any;
  dataSource2: any;
  displayedColumns2: string[] = ['username', 'password', 'email'];
  filteredvalue: string;
  user2: User2[];
  isLoading: boolean = true;
  constructor(private modalService: NgbModal,
    private _router: Router,
    private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.getUsers();
      
  }
  filterTable (filterValue :string) { 
    if(filterValue != null)
      this.dataSource2.filter = filterValue.trim().toLowerCase(); 
  }
  getUsers() {
    this.userService.takeAllUsers().subscribe(
      res => {
        this.isLoading= true;
        this.userService.users2 = res as User2[];
        this.user2 = this.userService.users2;
        this.dataSource2 = new MatTableDataSource(this.user2);
        console.log('Users Successfully Retrieved');

      },
      err => {
        console.log(err);
      },
      ()=>{
        this.filterTable(this.filteredvalue)
        setTimeout(()=>{ this.isLoading = false }, 1000)
      }
    )
  }

  open(content) {

    const modalRef = this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.navigateToParent()}`;
      });
  }

  openEdit(content) {
    this.userService.isModalOn = true;
    const modalRef = this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.navigateToParent()}`;
      this.userService.isModalOn = false;
      this.getUsers();
    });

    this.userService.setShowRequest("edit");
  }

  private navigateToParent(){
    if(ModalDismissReasons)
      this._router.navigate(['/userManagement/userEdit']);
  }
}
