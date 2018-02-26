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
  orderListRef: AngularFireList<any>;

  constructor(db: AngularFireDatabase) {
    this.orderList = db.list('orderlist').valueChanges();
    this.orderListRef = db.list('orderlist');
  }

  ngOnInit() {
    // this.orderListRef.push({
    //   name: 'K-Roo Sports',
    //   description: 'K-Roo Sports Youth Soccer Goals with Soccer Ball and Pump (Set of 2)',
    //   image: 'assets/kroosports.jpg',
    //   date: '2018-01-20'
    // });
  }
}



