import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from 'src/app/services/responsive.service';

@Component({
  selector: 'app-management-menu',
  templateUrl: './management-menu.component.html',
  styleUrls: ['./management-menu.component.css']
})
export class ManagementMenuComponent implements OnInit {

  constructor(private responsiveService: ResponsiveService) { }


  public isMobileLayout: boolean;

  ngOnInit(): void {
    this.responsiveService.currentData.subscribe(data => {
      this.isMobileLayout = data;
    });
  }
}
