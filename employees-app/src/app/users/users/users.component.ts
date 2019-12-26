import {Component, Input, OnInit} from '@angular/core';
import {User} from "../user.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  userForm = new FormGroup({
    userUserName: new FormControl(''),
    userPassword: new FormControl(''),
    userDescription: new FormControl(''),
    userBirthDate:  new FormControl('')
  });

  user: User;
  users: User[] = [];

  createNewUser() {
    let submittedUser = this.userForm.value;
    console.log(submittedUser);
    let newUser = new User(
      submittedUser.userUserName,
      submittedUser.userPassword,
      submittedUser.userDescription,
      new Date(submittedUser.userBirthDate));
    this.users.push(newUser)
  }

  constructor() { }

  ngOnInit() {
  }

}
