import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MyAccountComponent } from './my-account/my-account.component';
import { ProfileInformationsComponent } from './my-account/profile-informations/profile-informations.component';
import { AddressListComponent } from './my-account/address-list/address-list.component';
import { OrderHistoryComponent } from './my-account/order-history/order-history.component';
import { WishlistComponent } from './my-account/wishlist/wishlist.component';

const routes: Routes = [
  { path: '', component: MyAccountComponent },
  { path: 'profile-informations', component: ProfileInformationsComponent },
  { path: 'address-list', component: AddressListComponent },
  { path: 'order-history', component: OrderHistoryComponent },
  { path: 'wishlist', component: WishlistComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
