import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { CreditCardService } from './credit-card/credit-card.service';
import { UpdateCardComponent } from './update-card/update-card.component';
import { AddNewCardComponent } from './add-new-card/add-new-card.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CreditCardComponent, UpdateCardComponent, AddNewCardComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CreditCardService]
})
export class AppModule { }
