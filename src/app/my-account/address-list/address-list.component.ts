import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css'],
  providers: [AngularFireDatabase]
})
export class AddressListComponent implements OnInit {

  addressList: Observable<any[]>;
  addressListRef: AngularFireList<any>;

  showAddAddressForm: boolean;

  constructor(db: AngularFireDatabase) {
    this.addressList = db.list('addresslist').valueChanges();
    this.addressListRef = db.list('addresslist');
  }

  ngOnInit() {
  }

  addAddress(form: NgForm) {
    this.addressListRef.push({
      name: form.value.name,
      location: form.value.location,
      complement: form.value.complement,
      city: form.value.city,
      country: form.value.country
    });
    form.reset();
    this.showAddAddressForm = false;
  }
}
