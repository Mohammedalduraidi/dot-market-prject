import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import axios from "axios";



@Component({
  selector: 'app-user-project',
  templateUrl: './user-project.component.html',
  styleUrls: ['./user-project.component.css']
})
export class UserProjectComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit = () => {
  }
  openModal = () => {
    this.dialog.open(LoginModal1);
  }
}


@Component({
  selector: 'login-Modal1',
  templateUrl: 'login-Modal1.html',
})
export class LoginModal1 {
  constructor(
    public dialogRef: MatDialogRef<UserProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LoginModal1,
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
}