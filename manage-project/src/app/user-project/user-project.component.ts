import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import axios from "axios";

export var saveSomeData = {}

@Component({
  selector: 'app-user-project',
  templateUrl: './user-project.component.html',
  styleUrls: ['./user-project.component.css']
})
export class UserProjectComponent implements OnInit {
  ProjectData = [];
  projectName = ""
  dataSource = [];
  projectData = []
  displayedColumns: string[] = ['projectName', 'employees', 'equipment', 'fromDate', 'toDate'];
  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.getProjects()
  }
  openModal = () => {
    this.dialog.open(LoginModal1);
  }

  getProjects() {
    axios.get('/getProjects')
      .then((response) => {
        for (var i = 0; i < response.data.length; i++) {
          this.ProjectData.push(response.data[i])
        }
        this.dataSource = this.ProjectData;

      })
      .catch((err) => {
        console.log(err);
      })
  }
  //this function to go to th user details page and send the id and name of te project that been selected
  forTheNextComponent(id = '', projectName = '') {
    saveSomeData = { id: id, projectName: projectName }
    this.router.navigate(['user-details']);

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