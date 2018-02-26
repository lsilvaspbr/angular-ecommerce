import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
  providers: [AngularFireDatabase]
})
export class WishlistComponent implements OnInit {

  wishList: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.wishList = db.list('wishlist').valueChanges();
  }

  ngOnInit() {
  }
}
