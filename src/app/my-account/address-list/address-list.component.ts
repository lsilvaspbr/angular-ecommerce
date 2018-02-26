import { Component, OnInit } from '@angular/core';

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

  constructor(db: AngularFireDatabase) {
    this.addressList = db.list('addresslist').valueChanges();
  }

  ngOnInit() {
  }

}
