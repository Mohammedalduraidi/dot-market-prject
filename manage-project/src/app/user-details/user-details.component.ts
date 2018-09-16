import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import axios from "axios";
import { saveSomeData } from '../user-project/user-project.component';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  deleteButtonEquipment = true;
  deleteButton = true;
  droppedEmployee = [];
  droppedEquipment = [];
  employeeData = [];
  equipmentData = [];
  id = '';
  projectName = '';

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.getEmployee();
    this.getEquipment();
    this.projectName = saveSomeData['projectName'];
    this.id = saveSomeData['id']
  }
  //open login modal
  openModal = () => {
    this.dialog.open(LoginModal2);
  }
  //get equipments
  getEquipment() {
    axios.get('/getEquipment')
      .then((data) => {
        for (var i = 0; i < data.data.length; i++) {
          this.equipmentData.push(data.data[i]);
        }
      })
      .catch((err) => {
        throw err;
      })
  }

  //fetch the data from the data-base
  getEmployee() {
    axios.get('/getEmployee')
      .then((data) => {
        for (var i = 0; i < data.data.length; i++) {
          this.employeeData.push(data.data[i])
        }
      })
      .catch((err) => {
        throw err;
      })
  }

  //remove employee from assgined droppedEmployee array
  deleteEmployee() {
    var pop = this.droppedEmployee.pop()
    this.employeeData.push(pop)
    this.deleteButton = true
    return pop
  }

  //remove equipment from assgined droppedEquipment array
  deleteEquipment() {
    var pop = this.droppedEquipment.pop()
    this.equipmentData.push(pop)
    this.deleteButtonEquipment = true
    return pop
  }
  //to push the employ to the droppedEmployee array
  onItemDropEmployee(e: any) {
    if (this.droppedEmployee.length === 0) {
      for (var i = 0; i < this.employeeData.length; i++) {
        if (e.dragData.name === this.employeeData[i].name) {
          this.droppedEmployee.push(e.dragData);
          this.removeEmployee(e.dragData, this.employeeData)
        }
      }
    } else {
      alert("you already assgind an employee")
    }
    this.deleteButton = false
  }

  // to push the equipment to the droppedEquipment array
  onItemDropEquipment(e: any) {
    if (this.droppedEquipment.length === 0) {
      for (var i = 0; i < this.equipmentData.length; i++) {
        if (e.dragData.name === this.equipmentData[i].name) {
          this.droppedEquipment.push(e.dragData);
          this.removeEquipment(e.dragData, this.equipmentData);
        }
      }
    } else {
      alert("you already assigned and equipment")
    }
    this.deleteButtonEquipment = false;
  }

  // save the dropped items in the database
  save() {
    if (this.droppedEmployee[0] === undefined) {
      this.droppedEmployee[0] = { name: '' }
    }

    if (this.droppedEquipment[0] === undefined) {
      this.droppedEquipment[0] = { name: '' }
    }
    if (this.droppedEquipment[0].name.length === 0 && this.droppedEmployee[0].name.length === 0) {
      alert('please assign employee and equipment before save <3 ')
      this.droppedEmployee.pop()
      this.droppedEquipment.pop()
    } else {
      return axios.put("/saveItems", { id: this.id, employee: this.droppedEmployee[0].name, equipment: this.droppedEquipment[0].name })
        .then(() => {
          this.router.navigate(['user-project']);
        })
        .catch((err) => {
          throw err;
        })
    }
  }
  // remove equipment item that has been dragged
  removeEquipment(item: any, list: Array<any>) {
    let index = list.map((e) => {
      return e.name
    }).indexOf(item.name);
    list.splice(index, 1);
  }

  //remove equipment item that has been dragged
  removeEmployee(item: any, list: Array<any>) {
    let index = list.map((e) => {
      return e.name
    }).indexOf(item.name);
    list.splice(index, 1);
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
}
