import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage {
  tuition: number;
  payment: number;
  interest: number;
  amount: number;
  monthly:number;


  calculateInterest() {
    this.interest = this.tuition * 0.75 / 100 * this.payment;
   
  }

  calculateAmount() {
    this.amount = this.tuition + this.interest;
   
  }

  calculateMonthly() {
    this.monthly = this.amount / this.payment;
   


  }

}
