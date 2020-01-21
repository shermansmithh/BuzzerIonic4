import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the DistanceUnitPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'distanceUnit',
})
export class DistanceUnitPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: number) {
    if (value >= 1) {
      if(value < 50){
        return value.toFixed(0) + ' KM';
      } else{
        return "More than 50 KM"
      }
      
    } else {
      if((value *1000) <= 50){
        return " < 50 M"
      }
      return (value * 1000).toFixed(0) + ' M';
    }
  }
}
