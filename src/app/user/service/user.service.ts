import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser = "";
  constructor(
    private router: Router
  ) { }

  login(data: any): Boolean{
    if(data.username === "admin" && data.password === "123456"){
      this.currentUser = "admin"
      return true;
    }
    else if(data.username === "guest" && data.password === "123456"){
      this.currentUser = "guest"
      return true;
    }
    return false;
  }

  getCuttentUser(): string{
    return this.currentUser
  }

  logout(): void{
    this.currentUser = ""
    this.router.navigate(['/'])
  }
}
