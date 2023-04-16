import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from 'src/app/validators/my.validators';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
    form: FormGroup;
    email: FormControl;
    pass: FormControl;
    address: FormGroup;
    skills: FormArray | any;
    switch: FormControl;
    switchValue: boolean = false;

    ngOnInit(): void {
        this.email = new FormControl(
            '',
            [Validators.email, Validators.required, MyValidators.restrictedEmails],
            MyValidators.uniqEmail
        );
        this.pass = new FormControl('', [Validators.required, Validators.minLength(6)]);
        this.address = new FormGroup({
            country: new FormControl('RU'),
            capital: new FormControl('Moscow', Validators.required)
        });
        this.skills = new FormArray([]);
        this.switch = new FormControl('');

        this.form = new FormGroup({
            email: this.email,
            pass: this.pass,
            address: this.address,
            skills: this.skills,
            switch: this.switch,
        });
    }

    setCapital() {
        const cityMap = {
            RU: 'Moscow',
            USA: 'Washington',
            GB: 'London'
        };
        const cityKey = this.address.get('country')?.value as keyof object;
        const city = cityMap[cityKey];
        this.address.patchValue({ capital: city });
    }

    addSkill() {
        const control = new FormControl('', Validators.required);
        (this.form.get('skills') as FormArray).push(control);
    }
    getControls() {
        return (this.form.get('skills') as FormArray).controls;
    }

    onSubmit() {
        console.log(this.switch);
        this.form.reset();
    }

    changeSwitch(event: Event) {
        this.switchValue = !this.switchValue;
        this.switch.setValue(this.switchValue);
        console.log(this.form);
    }

    getSwitchLabelValue(): string {
        return this.switchValue ? 'Я Серёга' : 'Я не Серёга';
    }
}
