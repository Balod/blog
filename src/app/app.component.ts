import { Component, ViewEncapsulation } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
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

}
