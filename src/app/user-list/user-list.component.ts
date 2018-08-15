import { Component, OnInit, Input } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/service';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() user:User;

  constructor(private userService:UserService,private userList:MainComponent) { }

  ngOnInit() {
  }

}
