import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingComponent } from './routing.component';
import { Subject } from 'rxjs';
import { ActivatedRoute, Params, Router, RouterModule, RouterOutlet } from '@angular/router';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

class RouterStub {
    navigate(path: string[]) {}
}

class ActivatedRouteStub {
    private subject = new Subject<Params>();

    push(params: Params) {
        this.subject.next(params);
    }

    get params() {
        return this.subject.asObservable();
    }
}

describe('RoutingComponent', () => {
    let component: RoutingComponent;
    let fixture: ComponentFixture<RoutingComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [RoutingComponent],
            // RouterTestingModule https://angular.io/api/router/testing/RouterTestingModule
            imports: [RouterModule],
            providers: [
                {provide: Router, useClass: RouterStub},
                {provide: ActivatedRoute, useClass: ActivatedRouteStub},
            ],
            schemas: [NO_ERRORS_SCHEMA]
        });

        fixture = TestBed.createComponent(RoutingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should navigate to posts if goBack', () => {
        // Вместо TestBed.get() использовать TestBed.inject()
        let router = TestBed.inject(Router);
        let spy = spyOn(router, 'navigate');

        component.goBack();
        expect(spy).toHaveBeenCalledOnceWith(['/posts']);
    });

    it('should navigate to 404 if id === 0', () => {
        let router = TestBed.inject(Router);
        // Проблема с типизацией https://stackoverflow.com/questions/44099253/angular-testing-stubs-and-typescript
        let route = fixture.debugElement.injector.get(ActivatedRoute) as any;
        let spy = spyOn(router, 'navigate');

        route.push({id: '0'});
        expect(spy).toHaveBeenCalledWith(['/404']);
    });
    it('should have router-outlet directive', () => {
        let de = fixture.debugElement.query(By.directive(RouterOutlet));

        expect(de).not.toBeNull();
    });
});
