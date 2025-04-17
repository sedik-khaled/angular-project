import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  imports: [MatIconModule,SideNavComponent,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  //income
  lastmonths=['jan:1000$','feb:1500$','march:1200$'];
  currentmonthsincome='2000$'
  //expense
  lastmonthex=['jan:800$','feb:1000$','march:1200$'];
  currentmonthsex='1500$';

  //to do trannsction
  todotrans=[
    {description:'pay electricity bill'},
    {description:'submit monthly report'},
    {description:'buy groceries'},
    {description:'Call insurance company'},
  ];

  totalincome=2000
  totalexpense=1500
  constructor(private router:Router){}
  income(){
    this.router.navigate(['/budget-planner/income'])
  }
  inexpense(){
    this.router.navigate(['/budget-planner/expense'])
  }

  todo(){
    this.router.navigate(['/budget-planner/todo'])
  }

  
   totalsaving(){
    return this.totalincome-this.totalexpense
  }
}
