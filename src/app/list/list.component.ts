import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public userService: UserService) { }
users;
  ngOnInit() {
    // le composant est pret!
    this.users = this.userService.users;
  }

  selectUser() {}
}
