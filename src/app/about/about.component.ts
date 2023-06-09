import { Component, EventEmitter, HostBinding, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html'
})
export class AboutComponent {
    constructor(
        private fb: FormBuilder
    ) {
        this.form = this.fb.group({
            login: ['', Validators.required],
            email: ['']
        })
    }

    counter = 0;

    form: FormGroup;

    @Output() counterEmmiter = new EventEmitter<number>();

    @HostBinding('class') class = 'layered-content__item';

    increment() {
        this.counter ++;
        this.counterEmmiter.emit(this.counter);
    }

    decrement() {
        this.counter --;
    }
}
