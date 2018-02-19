import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProfileInformationsComponent } from './my-account/profile-informations/profile-informations.component';
import { AddressListComponent } from './my-account/address-list/address-list.component';
import { OrderHistoryComponent } from './my-account/order-history/order-history.component';
import { WishlistComponent } from './my-account/wishlist/wishlist.component';
import { MyAccountComponent } from './my-account/my-account.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileInformationsComponent,
    AddressListComponent,
    OrderHistoryComponent,
    WishlistComponent,
    MyAccountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
