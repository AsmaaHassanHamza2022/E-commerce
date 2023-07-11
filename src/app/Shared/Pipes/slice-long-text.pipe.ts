import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceLongText'
})
export class SliceLongTextPipe implements PipeTransform {

  transform(value:string|undefined,targetLength:number): string {
    return value ? value.slice(0,targetLength) +" ....." :'';
  }

}
