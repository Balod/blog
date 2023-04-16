import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-switch',
    templateUrl: './switch.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: SwitchComponent,
            multi: true
        },
    ],
})

export class SwitchComponent implements ControlValueAccessor {
    value: boolean = true;
    disabled: boolean = false;

    private onChange = (value: boolean) => {};

    @Output() clickEvent: EventEmitter<any> = new EventEmitter();
    @Input('labelValue') labelValue: string = '';

    writeValue(value: boolean): void {
        this.value = value;
    }
    registerOnChange(fn: (value: boolean) => void): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
    }
    setDisabledState?(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
    changeState(event: Event) {
        this.value = !this.value;
        this.onChange(this.value);
        this.clickEvent.emit(event);
    }

}
