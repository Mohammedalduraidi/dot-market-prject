import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import axios from "axios";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit = () => {
  }
  openModal = () => {
    this.dialog.open(LoginModal2);
  }

}
@Component({
  selector: 'login-Modal2',
  templateUrl: 'login-Modal2.html',
})
export class LoginModal2 {
  constructor(
    public dialogRef: MatDialogRef<UserDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LoginModal2,
    private router: Router) { }

  cancel = (): void => {
    this.dialogRef.close();
  }
  login = (name = '', password = '') => {
    if (name.length === 0 && password.length === 0) {
      alert('please fill the inputs')
    } else {
      axios({
        method: 'POST',
        url: '/login',
        data: { username: name, password: password }
      })
        .then((res) => {
          this.router.navigate(['admin-equipment']);
        })
        .catch((err) => {
          alert('user not found');
        })
    }
  }
