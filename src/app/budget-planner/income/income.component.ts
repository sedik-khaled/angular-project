import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './income.component.html',
  styleUrl: './income.component.scss'
})
export class IncomeComponent {
  incomeform:any
  selectedmonth:any
  januaryincome:any[]=[
    {source:'salary',amount:5000,investments:'401(k)'},
    {source:'freelancing',amount:1000,investments:'Stocks'},
  ]
  februaryincome:any[]=[
    {source:'salary',amount:5500,investments:'401(k)'},
    {source:'rental income',amount:700,investments:'Real Estate'},
  ]

  marchincome:any[]=[
    {source:'salary',amount:5200,investments:'401(k)'},
    {source:'freelancing',amount:1200,investments:'Stocks'},
    {source:'rental income',amount:600,investments:'Real Estate'},
  ]

monthSelected: boolean=true;
  constructor(public fb:FormBuilder , private router:Router){
    const currentdate=new Date();
    this.selectedmonth=currentdate.toLocaleString('deafult',{month:'long'})
  }
  ngOnInit():void{
    this.incomeform=this.fb.group({
      month:['',Validators.required],
      source:['',Validators.required],   
      amount:['',Validators.required],
      investments:['',Validators.required],
    })
    

     }
  //    add(){
  //     let addamount=this.incomeform.get('amount')?.value;
  //     addamount+=this.calcaulateTotalincome(this.selectedmonth)
  //   console.log(addamount)
  // }
  onsubmit(){
    if (this.incomeform.valid) {
      const newIncome = this.incomeform.value;
      switch (this.selectedmonth) {
        case 'January':
          this.januaryincome.push(newIncome);
          break;
        case 'February':
          this.februaryincome.push(newIncome);
          break;
        case 'march':
          this.marchincome.push(newIncome);
          break;
        default:
          break;
      }
      this.incomeform.reset();
      this.incomeform.patchValue({ month: '', source: '', amount: '', investments: '' });
    }
  }
  
  
  calcaulateTotalincome(month:string):number{
    let totalincome=0;
    for(const income of this.getincomesformonth(month)){
      totalincome+=income.amount 
    }
    return totalincome
  }
  
 
  onchange(event:any){
    this.selectedmonth=event.target.value;
    this.getfilter()
    this.monthSelected=true;
  }
  getincomesformonth(month:string):any[]{
    switch(month){
      case 'January':
        return this.januaryincome ;
        case 'February':
        return this.februaryincome ;
        case 'march':
        return this.marchincome;
        default:
          return[] 
    }
  }

  getfilter(){
    let filterincome:any[]=[];
    switch(this.selectedmonth){
      case 'January':
        filterincome=[...this.januaryincome]
        break;
        case 'February':
          filterincome=[...this.februaryincome]
          break;
          case 'march':
            filterincome=[...this.marchincome]
            break;
            default:
            break
    }
    return filterincome
  }
  saveform(){
    console.log("FormSaved")
  }
  onback(){
    this.router.navigate(['/budget-planner/dashboard'])
  }
}
