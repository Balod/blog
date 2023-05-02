import { Component, ViewChild } from '@angular/core';
import { RefDirective } from '../directives/ref.directive';
import { ModalComponent } from '../modal/modal.component';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html'
})
export class HomePageComponent {
    @ViewChild(RefDirective) refDir: RefDirective;

    showModal() {
        const component = this.refDir.containerRef.createComponent(ModalComponent);

        component.instance.title = 'Title from home page';
        component.instance.onClose.subscribe(
            () => {
                this.refDir.containerRef.clear()
            }
        )
    }
}
