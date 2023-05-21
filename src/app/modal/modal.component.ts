import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    animations: [
        trigger('modal', [
            transition(':enter', [
                style({ opacity: '0'}),
                animate(300, style(({opacity: '1'})))
            ]),
            transition(':leave', [
                animate(300, style({ opacity: '0'}))
            ])
        ])
    ]
})
export class ModalComponent {

    @Output('onClose') onClose = new EventEmitter;
    @Input('title') title = 'Default title';

    // modalState = 'end';
}
