import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import axios from "axios";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit = () => {
  }
  openModal = () => {
    this.dialog.open(LoginModal);
  }
}


@Component({
  selector: 'login-modal',
  templateUrl: 'login-modal.html',
})
export class LoginModal {
  constructor(
    public dialogRef: MatDialogRef<HomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LoginModal,
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