import { Component, OnInit } from '@angular/core';
import { CreditCardService } from './credit-card.service'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css'],
  providers: [CreditCardService]
})
export class CreditCardComponent implements OnInit {
  CreditForm: any;
  data: any;
  constructor(public service: CreditCardService) { }

  ngOnInit() {
    // this.CreditForm = this.CreditForm = new FormGroup({
    //   firstName: new FormControl(),
    //   lastName: new FormControl(),
    //   cardNumber: new FormControl(),

    // });
    this.DisplayData();
  }
  Create() {
    console.log(this.CreditForm.value);
  }
  DisplayData() {
    this.service.creditCards$.subscribe(x => {
      this.data = x
    }
    )

  }
}