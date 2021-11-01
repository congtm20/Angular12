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
    { fName: 'Apple', fPrice: -1, Discount: 0 },
    { fName: 'Orange', fPrice: 20, Discount: 20 },
    { fName: 'Melon', fPrice: 15, Discount: 15 },
    { fName: 'Strawberry', fPrice: 30, Discount: 50 },
  ];
  public provinces = [
    {
      province: 'Chọn thành phố',
      city: ['Quận/Huyện'],
    },
    {
      province: 'Thái Nguyên',
      city: [
        'Thành phố Thái Nguyên',
        'Thành phố Sông Công',
        'Thị xã Phổ Yên',
        'Huyện Đại Từ',
        'Huyện Định Hóa',
        'Huyện Đồng Hỷ',
        'Huyện Phú Bình',
        'Huyện Phú Lương',
        'Huyện Võ Nhai',
      ],
    },
    {
      province: 'Vĩnh Phúc',
      city: [
        'Thành phố Vĩnh Yên',
        'Thị xã Phúc Yên',
        'Huyện Bình Xuyên',
        'Huyện Lập Thạch',
        'Huyện Sông Lô',
        'Huyện Tam Đảo',
        'Huyện Tam Dương',
        'Huyện Vĩnh Tường',
        'Huyện Yên Lạc',
      ],
    },
    {
      province: 'Ninh Bình',
      city: [
        'Thành phố Ninh Bình',
        'Thị xã Tam Điệp',
        'Huyện Gia Viễn',
        'Huyện Hoa Lư',
        'Huyện Kim Sơn',
        'Huyện Nho Quan',
        'Huyện Yên Khánh',
        'Huyện Yên Mô',
      ],
    },
  ];
  public cities: string[] = ['Quận/Huyện'];
  constructor() {}

  ngOnInit(): void {
    console.log('province = ', this.provinces);
  }
  public resetName(): void {
    console.log('resetName');
    this.age = 18;
  }
  public changeCity(event: any) {
    const province = event.target.value;

    //cach 1
    //   console.log('event',province);
    //   const search = this.provinces.filter((data)=>data.province===province);
    //   console.log('search',search);
    // if(search && search.length>0){
    //   this.cities = search[0].city;
    // }
    this.cities = this.provinces.find(data => data.province===province)?.city||[];
  }
}
