import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'twoOOseven'
})

export class TwoOOsevenPipe implements PipeTransform {

    transform(value: string): any {
        const arr = value.split('');
        arr.forEach((element, index) => {
            if(index % 2 == 0) {
                arr[index] = element.toLocaleUpperCase();
            }
        });
        return arr.join('');
    }

}
