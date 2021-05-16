import { Component, OnChanges, OnInit } from '@angular/core';
import { UserService } from '../../user/service/user.service'

@Component({
  selector: 'app-navber',
  templateUrl: './navber.component.html',
  styleUrls: ['./navber.component.scss']
})
export class NavberComponent implements OnInit{
  username = "";
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.username = this.userService.getCuttentUser()
  }

  ngDoCheck(): void {
    this.username = this.userService.getCuttentUser()
  }

  logout(): void{
    this.userService.logout();
  }
}
