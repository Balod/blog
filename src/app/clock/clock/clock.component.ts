import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
    selector: 'app-clock',
    templateUrl: './clock.component.html'
})

export class ClockComponent implements OnInit {
    today: number;
    show: boolean = true;

    ngOnInit() {
        interval(1000)
        .subscribe(() => {
            this.today = Date.now()
        })
    }

    onToggle() {
        this.show = !this.show;
    }
}
