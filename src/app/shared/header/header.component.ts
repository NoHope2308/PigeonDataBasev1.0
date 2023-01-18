import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  get user() {
    return this.authService.user;
  }

  constructor( private authService: AuthService ) { }

  ngOnInit(): void {
  }

}
