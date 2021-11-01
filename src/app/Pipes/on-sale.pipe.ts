import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onSale'
})
export class OnSalePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(".",value);
    if(value != 0){
      return value+"";
    }else{
      return "!!!"
    }
    return "";
  }

}
