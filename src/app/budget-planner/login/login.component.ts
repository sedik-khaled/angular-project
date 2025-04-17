import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import{FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms'
import {MatSnackBar} from '@angular/material/snack-bar'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginform:any;
  regesterform:any;
  activeform:'login'|'regester'='login'
  
  constructor(private fb:FormBuilder,
    private router:Router,
    private snackBar:MatSnackBar,
  ){}
  ngOnInit(){
    this.loginform=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })

    this.regesterform=this.fb.group({
      username:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
  }
  toggleform(form:'login'|'regester'){
    this.activeform=form
  }

  login(){
    if(this.loginform.valid){
      console.log("login info=>" ,this.loginform.value)
      this.router.navigate(['./budget-planner/dashboard'])
    }else{
      this.snackBar.open('invalid email or password!','Close',{duration:3000})
    }
  }

  regester(){
    if(this.regesterform.valid){
      console.log("regester info=>" ,this.regesterform.value)
      setTimeout(() => {
        window.location.reload()
      }, 2000);
      this.router.navigate(['./budget-planner/login'])
    }else{
      this.snackBar.open('Please fill in all fields correctly','Close',{duration:3000})
    }
  }
}
