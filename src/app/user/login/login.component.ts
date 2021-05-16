import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service'

export interface UserData {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  User: any = ['Super Admin', 'Author', 'Reader'];
  form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserData,
    private router: Router,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private userService: UserService,
  ) {
    this.form = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  get username() { return this.form.get('username'); }
  get password() { return this.form.get('password'); }

  login(data: any): void{
    if(this.userService.login(data)){
      this._snackBar.open('登入成功', '確認',{
        duration: 1000
      });
      this.dialogRef.close();
      this.router.navigate(['/sale'])
    }
    else{
      this._snackBar.open('帳號或密碼錯誤', '確認',{
        duration: 1000
      });
    }
  }
}
