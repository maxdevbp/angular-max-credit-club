import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
export interface ICreditCard {
  firstName: string;
  lastName: string;
  expirationDate: Date;
  cardNumber: string;


}
@Injectable()
export class CreditCardService {
private _do_not_touch :Array<ICreditCard> = [
  {  
  firstName: 'Moty',
  lastName:'Chohen',
  expirationDate: new Date('01/10/2021'),
  cardNumber:'1234567890129534'
  },
  
  {firstName: 'Dan',
  lastName:'Bercoviz',
  expirationDate: new Date('01/10/2021'),
  cardNumber:'1234567890123300'
  },
  {firstName: 'Sarha',
  lastName:'Max',
  expirationDate: new Date('01/10/2021'),
  cardNumber:'1234567890127489'
  },
  {firstName: 'Lahav',
  lastName:'Matoof',
  expirationDate: new Date('01/10/2021'),
  cardNumber:'1234567890121107'
  },

  ]

public creditCards$ = new Observable<ICreditCard[]>((observer)=> {
    
    // observable execution
    observer.next(this._do_not_touch)
    observer.complete()
})
  constructor() { }
  /**
   * For test, fake HTTP Request
   */
public getCreditCards(){
  // replace this.http.get('someurl');
  return this.creditCards$;
}
}
