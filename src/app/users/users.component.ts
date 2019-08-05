import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private service: UsersService) { }

  list: any ;

  ngOnInit() {
    debugger
    this.service.getUsers().subscribe( data => this.list =  data);
    JSON.stringify(this.list)

    console.log(this.list);
  }

}