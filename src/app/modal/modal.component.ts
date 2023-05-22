import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    animations: [
        trigger('modalFade', [
            state('in', style({opacity: 0})),
            transition(':enter', [
                style({opacity: 0}),
                animate(1000, style({opacity: 1}))
            ]),
            transition(':leave', [
                style({opacity: 1}),
                animate(1000, style({opacity: 0}))
            ])
        ])
    ],
    host: {'[@modalFade]': 'in'}
})
export class ModalComponent {

    @Output('onClose') onClose = new EventEmitter;
    @Input('title') title = 'Default title';
}
