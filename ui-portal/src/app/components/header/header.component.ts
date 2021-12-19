import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router:Router, public toastr: ToastrManager) { }

  ngOnInit(): void {
  }

  logout(){
this.router.navigate(['/login']);
this.toastr.successToastr('Logged out successfully!')
localStorage.clear()
}
}
