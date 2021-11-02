import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.scss']
})
export class DrivenFormComponent implements OnInit {
  public name = 'Công';
  constructor(private common: CommonService) { }

  ngOnInit(): void {
  }
  public submitForm(): void{
    console.log('submit-from: name = '+this.name);
    this.common.submitData({name:this.name,age:12 });
  }
}
