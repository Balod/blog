import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appHide]'
})
export class HideDirective {

    @Input('appHide') set onHide(condition: boolean) {
        if (condition) {
            this.containerRef.createEmbeddedView(this.templateRef);
        } else {
            this.containerRef.clear();
        }
    }

    constructor(
        private templateRef: TemplateRef<any>,
        private containerRef: ViewContainerRef
    ) { }

}
