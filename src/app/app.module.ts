import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { CreditCardService } from './credit-card/credit-card.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CreditCardComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CreditCardService]
})
export class AppModule { }
