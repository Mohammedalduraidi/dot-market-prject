import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import Axios from 'axios';
var equipmentId = ''
@Component({
  selector: 'app-admin-equipment',
  templateUrl: './admin-equipment.component.html',
  styleUrls: ['./admin-equipment.component.css']
})
export class AdminEquipmentComponent implements OnInit {
  equipmentsData = []
  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit() {

    this.retrieveEquipment()
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

  //Open the add model
  openAddModal = () => {
    this.dialog.open(addModal);
  }
  //open the update modal
  openUpdateModal = (id) => {
    equipmentId = id
    this.dialog.open(updateModal);
  }
  //fetching the equipments from data-base
  retrieveEquipment = () => {
    let that = this
    Axios.get('/retrieveEquipment')
      .then((response) => {

        for (var i = 0; i < response.data.length; i++) {
          if (response.data[i].image === null) {
            response.data['image'] = 'https://clicktrans.com/bundles/app/images/picture-default.png'
          }
        }
        that.equipmentsData = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  };

  //delete the equipment from data-base
  deleteEquipment = (equipmentId: any) => {
    Axios.post('/deleteEquipment', { id: equipmentId })
      .then((response) => {
        alert('the equipment has been deleted');
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      })
  };


}

// Add Modal component
@Component({
  selector: 'add-modal',
  templateUrl: 'add-modal.html',
})
export class addModal {
  selectedImage: File;
  constructor(
    public dialogRef: MatDialogRef<AdminEquipmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: addModal) { }

  Cancel(): void {
    this.dialogRef.close();
  }
  uploadImage = (event) => {
    let photo = event.target.files[0];
    let that = this
    let fileReader = new FileReader();
    fileReader.readAsDataURL(photo);
    fileReader.onload = (e: any) => {
      that.selectedImage = e.target.result;
    }
  }
  addEquiepment = (name = '', serialNumber = '') => {
    Axios.post('/addEquiepment', { name, serialNumber, image: this.selectedImage })
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
  selector: 'update-modal',
  templateUrl: 'update-modal.html',
})
export class updateModal {
  selectedImage: File;
  constructor(
    public dialogRef: MatDialogRef<AdminEquipmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: updateModal) { }

  Cancel(): void {
    this.dialogRef.close();
  }
  uploadImage = (event) => {
    let photo = event.target.files[0];
    let that = this
    let fileReader = new FileReader();
    fileReader.readAsDataURL(photo);
    fileReader.onload = (e: any) => {
      that.selectedImage = e.target.result;
    }
  }
  //update the equipment
  updateEquipment = (name = '', serialNumber = '') => {
    Axios.put('/updateEquipment', { name, serialNumber, image: this.selectedImage, id: equipmentId })
      .then((response) => {
        alert('the equipment has been updated');
        window.location.reload();
      })
      .catch((error) => {
        console.log(error)
      })
  }

}