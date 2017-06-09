import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {

  disabled = false;
  status: {isopen: boolean} = {isopen: false};
  user: string;

  constructor(private router: Router,private auth:AuthService) { }

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void {
    this.user = localStorage.getItem('cpc_user');
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
