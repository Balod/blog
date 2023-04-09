import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appStyle]'
})
export class StyleDirective {

    @Input('appStyle') color: string = 'red';
    @Input() dStyles: {textDecoration?: string, fontWeight?: string} = {};

    @HostBinding('style.color') elColor: string | null = null;

    constructor(
        private el: ElementRef,
        private r: Renderer2
    ) {
        // Почему не красный?
        this.r.setStyle(this.el.nativeElement, 'color', this.color);
    }

    @HostListener('click', ['$event.target']) onClick(event: Event) {
        console.log(event);
    }

    @HostListener('mouseenter') onEnter() {
        this.elColor = this.color;
        this.r.setStyle(this.el.nativeElement, 'fontWeight', this.dStyles.fontWeight);
        this.r.setStyle(this.el.nativeElement, 'textDecoration', this.dStyles.textDecoration);
    }

    @HostListener('mouseleave') onLeave() {
        this.elColor = null;
        this.r.setStyle(this.el.nativeElement, 'fontWeight', null);
        this.r.setStyle(this.el.nativeElement, 'textDecoration', null);
    }

}
