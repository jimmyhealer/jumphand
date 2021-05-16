import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../user/login/login.component'
import { UserService } from '../user/service/user.service'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  username: string | undefined;
  password: string | undefined;
  now = 1;

  constructor(public dialog: MatDialog,
    private userService: UserService  
    ) { }

  ngOnInit(): void {
    let tmp = this.userService.getCuttentUser()
    if(tmp === "admin" || tmp === "guest"){
      this.now = 0;
    }
    else{
      this.now = 1;
    }
  }

  ngDocheck(): void{
    let tmp = this.userService.getCuttentUser()
    if(tmp === "admin" || tmp === "guest"){
      this.now = 0;
    }
    else{
      this.now = 1;
    }
  }

  loginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '350px',
      data: {username: this.username, password: this.password}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Successfully');
    })
  }
}