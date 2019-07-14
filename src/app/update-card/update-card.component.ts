import { Component, OnInit } from '@angular/core';
import {CreditCardService} from '../credit-card/credit-card.service'

@Component({
  selector: 'app-update-card',
  templateUrl: './update-card.component.html',
  styleUrls: ['./update-card.component.css']
})
export class UpdateCardComponent implements OnInit {

  constructor(public service: CreditCardService) { }

  ngOnInit() {
  }

}