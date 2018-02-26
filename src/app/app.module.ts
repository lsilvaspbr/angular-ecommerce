import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { ProfileInformationsComponent } from './my-account/profile-informations/profile-informations.component';
import { AddressListComponent } from './my-account/address-list/address-list.component';
import { OrderHistoryComponent } from './my-account/order-history/order-history.component';
import { WishlistComponent } from './my-account/wishlist/wishlist.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { SignInComponent } from './sign-in/sign-in.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileInformationsComponent,
    AddressListComponent,
    OrderHistoryComponent,
    WishlistComponent,
    MyAccountComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
