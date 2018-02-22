import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { ProfileInformationsComponent } from './my-account/profile-informations/profile-informations.component';
import { AddressListComponent } from './my-account/address-list/address-list.component';
import { OrderHistoryComponent } from './my-account/order-history/order-history.component';
import { WishlistComponent } from './my-account/wishlist/wishlist.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { AppRoutingModule } from './/app-routing.module';


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
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
