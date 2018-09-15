import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import Axios from 'axios';
@Component({
  selector: 'app-admin-equipment',
  templateUrl: './admin-equipment.component.html',
  styleUrls: ['./admin-equipment.component.css']
})
export class AdminEquipmentComponent implements OnInit {
  jackel = true
  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit = () => {
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
  openUpdateModal = () => {
    this.dialog.open(updateModal);
  }
}

// Add Modal component
@Component({
  selector: 'add-modal',
  templateUrl: 'add-modal.html',
})
export class addModal {
  selectedFile: File;
  constructor(
    public dialogRef: MatDialogRef<AdminEquipmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: addModal) { }

  Cancel(): void {
    this.dialogRef.close();
  }
  uploadImage = (e) => {
    const photo = e.target.files[0]
    const formData = new FormData()
    formData.append('selectImage', photo);
    console.log(formData)
    Axios.post("/uploadImage", formData)
      .then((res) => {
        console.log(res);

      })
      .catch(err => {
        console.log(err);

      })
  }
  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }
  onUpload() {
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    console.log(this.selectedFile)
  }
}


// Update Modal Component
@Component({
  selector: 'update-modal',
  templateUrl: 'update-modal.html',
})
export class updateModal {

  constructor(
    public dialogRef: MatDialogRef<AdminEquipmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: updateModal) { }

  Cancel(): void {
    this.dialogRef.close();
  }


}