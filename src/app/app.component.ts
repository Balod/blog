import { Component, ViewEncapsulation } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { routAnimation } from './app-routing.animation';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: [routAnimation]
})
export class AppComponent {
    constructor(
        private title: Title,
        private meta: Meta
    ) {
        this.title.setTitle('Seryoga Page');
        this.meta.addTags([
            { name: 'keywords', content: 'seryoga ass' }
        ])
    }

    getRouteAnimationState(outlet: RouterOutlet) {
        return (
            outlet &&
            outlet.activatedRouteData &&
            outlet.activatedRouteData['animation']
        )
    }

}
