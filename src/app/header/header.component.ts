import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DialLoginComponent} from '../dial-login/dial-login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  openDial():void{
let dialogRef=this.dialog.open(DialLoginComponent,{width:'50%',maxWidth:'500px' ,height:'50%',panelClass:'dialog'});

  }

}
