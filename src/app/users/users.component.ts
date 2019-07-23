import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from "@angular/forms";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[];

  public userForm: FormGroup = new FormGroup({
    id: new FormControl("", [Validators.required]),
    first_name: new FormControl("", [Validators.required]),
    last_name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    avatar: new FormControl("", [Validators.required]),
  })

  constructor(private service: UsersService) { }

  ngOnInit() {
     this.service.getUsers().subscribe(data => {
      this.users = data.data;
    })
  }

  push(user: any) {
    console.log('user: ', user);
    if (!this.users) {
      this.users = [];
    }
    this.users.push(user);
  }
}