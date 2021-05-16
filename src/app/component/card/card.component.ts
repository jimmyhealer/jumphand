import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { UserService } from '../../user/service/user.service'


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  now = 1;

  @Input() dataSource: any;
  constructor(public dialog: MatDialog,
    private userService: UserService  
  ) { }

  ngOnInit(): void {
    if(this.userService.getCuttentUser() === "admin"){
      this.now = 1;
    }
    else{
      this.now = 0;
    }
  }

  openDashboard(): void {
    const dialogRef = this.dialog.open(DashboardComponent, {
      width: '1200px',
      height: '600px',
      data: this.dataSource
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

  handlebuy(number: number): void{
    this.dataSource.timelyPrice += number;
  }
}
