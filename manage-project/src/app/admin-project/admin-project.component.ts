import { Component, OnInit } from '@angular/core';
import Axios from 'axios';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-project',
  templateUrl: './admin-project.component.html',
  styleUrls: ['./admin-project.component.css']
})
export class AdminProjectComponent implements OnInit {

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
