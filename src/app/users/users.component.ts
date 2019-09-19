import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [];
  constructor(private service: UsersService) { }

  ngOnInit() {
    this.service.getUsers().subscribe((data: any[]) => {
      this.users = data.slice();
    })
  }

}