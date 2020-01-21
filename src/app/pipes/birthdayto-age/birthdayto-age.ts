import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the BirthdaytoAgePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'birthdaytoAge',
})
export class BirthdaytoAgePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {

      return new Date().getFullYear() - new Date(value).getFullYear() -1;
 
  }
}
