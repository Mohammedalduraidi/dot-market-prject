import { Component, OnInit } from '@angular/core';
import Axios from 'axios';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-employee',
  templateUrl: './admin-employee.component.html',
  styleUrls: ['./admin-employee.component.css']
})
export class AdminEmployeeComponent implements OnInit {

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
