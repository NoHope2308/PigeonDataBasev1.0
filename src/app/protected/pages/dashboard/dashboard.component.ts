import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  get user() {
    return this.authService.user;
  }

  constructor( private router: Router,
               private authService: AuthService) { }

  ngOnInit(): void {
  }

  logOut() {
    this.authService.logOut();
    this.router.navigateByUrl('/home');
  }

}
