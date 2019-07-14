import { Component, OnInit } from '@angular/core';
import {CreditCardService} from '../credit-card/credit-card.service'

@Component({
  selector: 'app-add-new-card',
  templateUrl: './add-new-card.component.html',
  styleUrls: ['./add-new-card.component.css']
})
export class AddNewCardComponent implements OnInit {

  constructor(public service: CreditCardService) { }

  ngOnInit() {
  }

}