import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html'
})
export class ModalComponent {
    @Output('onClose') onClose = new EventEmitter;
    @Input('title') title = 'Default title';
}
