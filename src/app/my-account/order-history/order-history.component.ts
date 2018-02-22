import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css'],
  providers: [AngularFireDatabase]
})
export class OrderHistoryComponent implements OnInit {

  orderList: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.orderList = db.list('orderlist').valueChanges();
  }

  ngOnInit() {
  }
}



