import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users/users.service';

@NgModule({
  imports: [BrowserModule, FormsModule , ReactiveFormsModule ,HttpClientModule],
  declarations: [AppComponent, HelloComponent,  UsersComponent],
  bootstrap: [AppComponent],
  providers: [ UsersService]
})
export class AppModule { }
