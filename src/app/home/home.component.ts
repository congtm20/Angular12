import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name: string = 'Minh Công';
  public age: number = 18;
  public fruits = ['Apple', 'Orange', 'Melon', 'Strawberry', 'Mango', 'Cherry'];
  public fruits2 = [
    { fName: 'Apple', fPrice: -1 , Discount: 0 },
    { fName: 'Orange', fPrice: 20, Discount: 20 },
    { fName: 'Melon', fPrice: 15, Discount: 15 },
    { fName: 'Strawberry', fPrice: 30, Discount: 50},
  ];
  constructor() {}

  ngOnInit(): void {
    console.log('Trai cay = ', this.fruits2);
  }
  public resetName(): void {
    console.log('resetName');
    this.age = 18;
  }
}
