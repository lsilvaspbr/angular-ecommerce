import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishList = [
    {
      name: 'Nike Shirt',
      description: 'Nike FC Barcelona 2018 Breathe Third Soccer Jersey',
      image: 'assets/barcelonashirt.jpg',
      date: '2018-01-08'
    },
    {
      name: 'Adidas Soccer Shoes',
      description: 'Adidas Ace 18.3 FG Soccer Shoes',
      image: 'assets/adidasboots.jpg',
      date: '2018-01-20'
    },
    {
      name: 'Nike MercurialX Shoes ',
      description: 'Nike MercurialX Victory VI IC Indoor Soccer Shoes',
      image: 'assets/nikeboots.jpg',
      date: '2018-01-20'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
