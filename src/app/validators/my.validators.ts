import { AbstractControl, FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class MyValidators {
    static restrictedEmails(control: FormControl): {[key: string]: boolean} | null {
        if(control.value === 'serega@mail.ru') {
            return {
                'restrictedEmail': true
            }
        }
        return null;
    }

    static uniqEmail(control: AbstractControl): Promise<any> | Observable<any> {
        return new Promise(resolve => {
            setTimeout(() => {
                if(control.value === 'async@mail.ru') {
                    resolve({'uniqEmail': true});
                } else {
                    resolve(null);
                }
            }, 1000);
        });
    }
}