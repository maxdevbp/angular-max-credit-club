import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [];
  userForm :FormGroup ;
  constructor(private service: UsersService) { }

  ngOnInit() {
    this.service.getUsers().subscribe((data) => {
      var users = <any[]>(data['data']);
      this.users = users.slice();
    })

    this.userForm =new FormGroup({
      'firstName' : new FormControl('', Validators.required),
      'lastName' : new FormControl('', Validators.required),
      'email' : new FormControl('', [Validators.required, 
                                     Validators.email]),
      'imagePath' : new FormControl('', Validators.required)
    })
  }

  onSubmit(){
    var user =  {email : this.userForm.value["email"], first_name: this.userForm.value["firstName"], last_name: this.userForm.value["firstName"], avatar: this.userForm.value["imagePath"]};
    console.log(this.userForm)
    // user.email = this.userForm.value["email"];
    // user.first_name = this.userForm.value["firstName"];
    // user.last_name = this.userForm.value["lastlastName_name"];
    // user.avatar = this.userForm.value["imagePath"];
    this.users.push(user);
    
  }

}