import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private service: UsersService) { }

  list: any ;


  ngOnInit() {
    this.service.getUsers().subscribe( data => {
      this.list =  data.data;
      console.log(data)});
  }

  usersForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });
prin(form){
console.log(form)
}

}