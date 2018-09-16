import { Component, OnInit, Inject } from '@angular/core';
import Axios from 'axios';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
var employeeId = ''
@Component({
  selector: 'app-admin-employee',
  templateUrl: './admin-employee.component.html',
  styleUrls: ['./admin-employee.component.css']
})
export class AdminEmployeeComponent implements OnInit {

  employeesData = []
  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.retrieveEmployeeData()
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
  //opent the add employee modal
  openAddEmployeeModal = () => {
    this.dialog.open(addEmployeeModal);
  }
  //open the update modal
  openUpdateModal = (id) => {
    employeeId = id
    this.dialog.open(updateEmployeeModal);
  }

  //fetching the employees data from data-base
  retrieveEmployeeData = () => {
    let that = this
    Axios.get('/retrieveEmployeeData')
      .then((response) => {
        console.log(response);
        that.employeesData = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  };

  //delete employee from data-base
  deleteEmployee = (equipmentId: any) => {
    Axios.post('/deleteEmployee', { id: equipmentId })
      .then((response) => {
        alert('the employee has been deleted');
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      })
  };
}
@Component({
  selector: 'add-employ-modal',
  templateUrl: 'add-employ-modal.html',
})
export class addEmployeeModal {

  constructor(
    public dialogRef: MatDialogRef<AdminEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: addEmployeeModal) { }

  Cancel(): void {
    this.dialogRef.close();
  }

  //add empolyee
  addEmployee = (name = '', Nationality = '', jobTitle = '') => {
    Axios.post('/addEmployee', { name, Nationality, jobTitle })
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
  selector: 'update-employee-modal',
  templateUrl: 'update-employee-modal.html',
})
export class updateEmployeeModal {

  constructor(
    public dialogRef: MatDialogRef<AdminEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: updateEmployeeModal) { }

  Cancel(): void {
    this.dialogRef.close();
  }

  //Update Employee 
  updateEmployee = (name = '', Nationality = '', jobTitle = '') => {
    Axios.put('/updateEmployee', { name, Nationality, jobTitle, id: employeeId })
      .then((response) => {
        alert('the employee has been updated');
        window.location.reload();
      })
      .catch((error) => {
        console.log(error)
      })
  }

}