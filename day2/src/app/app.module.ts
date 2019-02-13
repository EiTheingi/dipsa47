import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddAddressComponent } from './components/add-address.component';
import { ListAddressesComponent } from './components/list-addresses.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAddressComponent,
    ListAddressesComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
