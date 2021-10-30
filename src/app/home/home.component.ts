import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name: string = 'Minh Công';
  public age: number =18;
  public fruits =['Apple','Orange','Melon','Strawberry','Mango','Cherry'];
  constructor() { }

  ngOnInit(): void {
    console.log('Trai cay = ',this.fruits);

  }
  public resetName(): void {
    console.log('resetName');
    this.age=18;
  }
}
