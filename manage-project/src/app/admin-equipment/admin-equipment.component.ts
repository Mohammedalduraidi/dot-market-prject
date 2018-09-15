import { Component, OnInit } from '@angular/core';
import Axios from 'axios';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-equipment',
  templateUrl: './admin-equipment.component.html',
  styleUrls: ['./admin-equipment.component.css']
})
export class AdminEquipmentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
}
