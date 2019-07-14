import { Component, OnInit } from '@angular/core';
import {CreditCardService} from './credit-card.service'

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css'],
  providers:[CreditCardService]
})
export class CreditCardComponent implements OnInit {




  constructor(public service: CreditCardService) { }

  ngOnInit() {
  }

}