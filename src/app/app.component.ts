import { Component, ViewEncapsulation } from '@angular/core';
import { TabEnum } from './enums/enums';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    navButton: HTMLElement;
    tab = 'httpClientForm';

    changeTab(event: Event) {
        this.navButton = (event.target as HTMLElement);
        console.log(event);

        switch (this.navButton.id) {
            case TabEnum.blog:
                this.tab = TabEnum.blog;
                break;
            case TabEnum.form:
                this.tab = TabEnum.form;
                break;
            case TabEnum.httpClientForm:
                this.tab = TabEnum.httpClientForm;
                break;
        }
    }
}
