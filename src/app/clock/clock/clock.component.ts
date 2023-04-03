import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-clock',
    templateUrl: './clock.component.html',
})

export class ClockComponent implements OnInit {
    today: number | undefined;

    ngOnInit() {
        setInterval(() => {this.today = Date.now()}, 1000);
    }
}
