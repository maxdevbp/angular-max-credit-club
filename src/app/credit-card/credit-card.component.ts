import { Component, OnInit } from '@angular/core';
import {CreditCardService} from './credit-card.service'
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css'],
  providers:[CreditCardService]
})
export class CreditCardComponent implements OnInit {
  credits :any;
  profileForm : FormGroup;
  newCard = {};
  constructor(public service: CreditCardService) { 

  }

  ngOnInit() {
    this.service.getCreditCards().subscribe((data)=>{
         this.credits = data;
    });

    this.profileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      expirationDate: new FormControl(''),
      cardNumber: new FormControl(''),


  });


  }

addCard() {
  console.log(this.profileForm.value)
  this.profileForm.value;
}

}