import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import Axios from 'axios';
var projectID = ''
@Component({
  selector: 'app-admin-project',
  templateUrl: './admin-project.component.html',
  styleUrls: ['./admin-project.component.css']
})
export class AdminProjectComponent implements OnInit {
  projectData = []
  constructor(private router: Router, public dialog: MatDialog) { }
  ngOnInit() {
    this.retrieveProjectData()
  }
  logout = () => {
    Axios.get('/logout')
      .then(() => {
        this.router.navigate(['user-project'])
      })
      .catch((err) => {
        throw err;
      })
  }

  //open the add prject modal
  openProjectModal = () => {
    this.dialog.open(addProject);
  }

  //open the update modal
  openUpdateModal = (id) => {
    projectID = id
    this.dialog.open(updateProject);
  }
  //fetching the project data from data-base
  retrieveProjectData = () => {
    let that = this
    Axios.get('/retrieveProjectData')
      .then((response) => {
        console.log(response);
        that.projectData = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  };

  //delete project from data-base
  deleteProject = (id: any) => {
    Axios.post('/deleteProject', { id: id })
      .then((response) => {
        alert('the employee has been deleted');
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      })
  };

}


// Add Modal component
@Component({
  selector: 'add-project',
  templateUrl: 'add-project.html',
})
export class addProject {

  constructor(
    public dialogRef: MatDialogRef<AdminProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: addProject) { }

  Cancel(): void {
    this.dialogRef.close();
  }

  addProject = (name = '', type = '', fromDate = '', toDate = '') => {
    Axios.post('/addProject', { name, type, fromDate, toDate })
      .then((response) => {
        window.location.reload()
      })
      .catch((error) => {
        console.log(error);
      })
  }

}



// Update Modal Component
@Component({
  selector: 'update-project',
  templateUrl: 'update-project.html',
})
export class updateProject {

  constructor(
    public dialogRef: MatDialogRef<AdminProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: updateProject) { }

  Cancel(): void {
    this.dialogRef.close();
  }

  //update the equipment
  updateProject = (name = '', type = '', fromDate = '', toDate = '') => {
    Axios.put('/updateProject', { name, type, fromDate, toDate, id: projectID })
      .then((response) => {
        alert('the project has been updated');
        window.location.reload();
      })
      .catch((error) => {
        console.log(error)
      })
  }

}