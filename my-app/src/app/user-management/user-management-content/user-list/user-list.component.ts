import { Component, OnInit, AfterViewInit, Input, NgModule, SimpleChange } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal, NgbModalConfig, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { MatTableDataSource } from '@angular/material/table';
import { User2 } from 'src/app/models/user2.model';
import { FormControl } from '@angular/forms';
import { delay, map, startWith } from 'rxjs/operators';
import { ResponsiveService } from 'src/app/services/responsive.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  filteredvalue: string;
  user2: User2[];
  isLoading: boolean = true;
  closeResult = '';
  mycontent: any;
  displayedColumns2: string[] = ['username', 'password', 'email', 'edit'];
  dataSource2: any;
  public isMobileLayout: boolean;
  checkModal: Observable <any>;
  constructor(private modalService: NgbModal,
    private _router: Router,
    private userService: UserService,
    private route: ActivatedRoute,
    private modalConfig: NgbModalConfig,
    private responsiveService: ResponsiveService
    
  ) {
    modalConfig.backdropClass = 'backdrop';
    modalConfig.animation = true;
    modalConfig.size = 'lg';
    // modalConfig.windowClass = 'modal-content'
  }

  ngOnInit(): void {

    // this.user = this.userService.getAllUser()
    // console.log("id: " + +this.route.snapshot.paramMap.get('id'))
    // this.dataSource = new MatTableDataSource(this.user);
    this.getUsers();

    this.responsiveService.currentData.subscribe(data => {
      this.isMobileLayout = data;
    });
    if(this.userService.isModalOn){
      console.log(this.route.snapshot.paramMap.get('id'));
    }
  }

  ngAfterViewInit(): void {
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
        console.log("Users Successfully Retrieved");

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

    this.userService.isModalOn = true;
    const modalRef = this.modalService.open(content
    ).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.navigateToParent()}`;
      this.userService.isModalOn = false;
      this.getUsers();
    });
    

    this.userService.setShowRequest("show");
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

  private navigateToParent() {
    if (ModalDismissReasons)
      this._router.navigate(['/userManagement/userList']);
  }


}
