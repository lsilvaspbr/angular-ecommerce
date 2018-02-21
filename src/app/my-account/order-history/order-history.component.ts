import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  orderList = [
    {
      name: 'Adidas Soccer Ball',
      description: 'Adidas Performance Champions League Finale Capitano Soccer Ball',
      image: 'assets/championsball.jpg',
      date: '2018-01-08'
    },
    {
      name: 'Soccer Shin Guards',
      description: 'Youth Sizes - by DashSport - Best Kids Soccer Equipment with Ankle Sleeves - Great for Boys and Girls',
      image: 'assets/shinguards.jpg',
      date: '2018-01-20'
    },
    {
      name: 'K-Roo Sports',
      description: 'K-Roo Sports Youth Soccer Goals with Soccer Ball and Pump (Set of 2)',
      image: 'assets/kroosports.jpg',
      date: '2018-01-20'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}



