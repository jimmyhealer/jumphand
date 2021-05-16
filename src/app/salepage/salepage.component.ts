import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DashboardComponent } from '../dashboard/dashboard.component'
import { fishData } from '../data/fish'
import { Router } from '@angular/router';
import { UserService } from '../user/service/user.service'

@Component({
  selector: 'app-salepage',
  templateUrl: './salepage.component.html',
  styleUrls: ['./salepage.component.scss']
})

export class SalepageComponent implements OnInit {
  data = fishData
  now = 1
  constructor(public dialog: MatDialog,
    private userService: UserService,
    private router: Router  
    ) { }

  ngOnInit(): void {
    let tmp = this.userService.getCuttentUser()
    if(tmp === "admin"){
      this.now = 1;
    }
    else if(tmp == "guest"){
      this.now = 0;
    }
    else{
      this.router.navigate(['/']);
    }
  }

  openDashboard(): void {
    const dialogRef = this.dialog.open(DashboardComponent, {
      width: '1200px',
      height: '600px',
      data: {"name":"","quantity":0,"price":0,"timelyPrice":0},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
