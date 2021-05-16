import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../user/service/user.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  edit = false;
  now = 1;
  test = 0;
  options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(
    public dialogRef: MatDialogRef<DashboardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar,
    private userService: UserService  
  ) {
    if(data.name === "") this.edit = true;
  }

  ngOnInit(): void {
    if(this.userService.getCuttentUser() === "admin"){
      this.now = 1;
    }
    else{
      this.now = 0;
    }
  }

  handlebuy(number: number): void{
    this.data.timelyPrice += number;
  }

  autoprice(number: string): void{
    this._snackBar.open('最高價格: '+ number + ' 設定完成', '確認',{
      duration: 2000
    });
  }
}
