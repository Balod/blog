import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-clock',
    templateUrl: './clock.component.html'
})

export class ClockComponent implements OnInit {
    today: number;
    show: boolean = true;

    ngOnInit() {
        setInterval(() => {this.today = Date.now()}, 1000);
    }

    onToggle() {
        this.show = !this.show;
    }
}
