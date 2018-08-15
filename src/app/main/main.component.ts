import { Component, OnInit,NgZone } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

import { User } from '../model/user';
import {UserService} from '../service/service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private baseUrl="http://localhost:8080";
  users:Observable<User[]>
  
  constructor( private UserService:UserService) { }

  ngOnInit() {
     this.reloadData();


  }
reloadData() {

  this.users=this.UserService.getUserList();
  
  }


}
