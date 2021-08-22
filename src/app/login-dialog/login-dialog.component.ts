import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
  user = {email: '', password: '', remember: false};
  
  constructor(public dialofRef : MatDialogRef<LoginDialogComponent>) { }

  ngOnInit(): void {
  }
onSubmit(){
  alert("submitted");
  this.dialofRef.close();
}
}
