import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { CreditCardService } from './credit-card/credit-card.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule],
  declarations: [ AppComponent, HelloComponent, CreditCardComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CreditCardService]
})
export class AppModule { }
