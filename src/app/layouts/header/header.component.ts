import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from 'src/app/login-dialog/login-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog :MatDialog) { }

  ngOnInit(): void {
  }

  OpenLoginDialog(){
    console.log(" OpenLoginDialog clicked");
    let dialogref = this.dialog.open(LoginDialogComponent,{width: '500px', height: '450px'});
  }

}
