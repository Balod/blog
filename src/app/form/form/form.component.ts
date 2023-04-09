import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
    form: FormGroup;
    email: FormControl;
    pass: FormControl;

    ngOnInit(): void {
        this.email =  new FormControl('', [Validators.email, Validators.required]);
        this.pass = new FormControl('', [Validators.required, Validators.minLength(6)]);
        this.form = new FormGroup({email: this.email, pass: this.pass});
    }

    onSubmit() {
        console.log(this.pass);
    }
}
