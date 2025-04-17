import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { DashboardComponent } from "../dashboard/dashboard.component";
@Component({
  selector: 'app-side-nav',
  imports: [MatIconModule,],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  constructor(private router:Router){}
Issideout=true;
//void:
toggleslideout() {
  this.Issideout=!this.Issideout
}

ondash(){
  this.router.navigate(['./budget-planner/dashboard'])
}
onprofile(){
  this.router.navigate(['./budget-planner/profile'])
}
onhistory(){
  this.router.navigate(['./budget-planner/history'])
}
onlogout(){
  this.router.navigate(['./budget-planner/login'])
}
}
