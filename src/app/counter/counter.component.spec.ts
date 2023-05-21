import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { By } from '@angular/platform-browser';

describe('CounterComponent', () => {
    let component: CounterComponent;
    let fixture: ComponentFixture<CounterComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CounterComponent]
        });

        fixture = TestBed.createComponent(CounterComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render counter property', () => {
        component.counter = 42;

        fixture.detectChanges();

        let de = fixture.debugElement.query(By.css('.h1'));
        let el: HTMLElement = de.nativeElement;

        expect(el.textContent).toContain('42');
    });

    it('should add text-success class if counter is even', () => {
        component.counter = 6;

        fixture.detectChanges();

        let de = fixture.debugElement.query(By.css('.h1'));
        let el: HTMLElement = de.nativeElement;

        expect(el.classList.contains('text-success')).toBeTruthy();
    });

    it('should increment counter if increment button was clicked', () => {
        let btn = fixture.debugElement.query(By.css('#increment'));
        btn.triggerEventHandler('click');

        expect(component.counter).toBe(1);
    });
});
