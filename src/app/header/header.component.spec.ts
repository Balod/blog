import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeaderComponent } from "./header.component";
import { By } from "@angular/platform-browser";
import { ActivatedRoute, RouterLinkWithHref, RouterModule } from "@angular/router";

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    const fakeActivatedRoute = {
        snapshot: { data: {} }
    } as ActivatedRoute;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderComponent],
            imports: [RouterModule],
            providers: [{provide: ActivatedRoute, useValue: fakeActivatedRoute}]
        });

        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should have link to posts page', () => {
        let debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
        let index = debugElements.findIndex(e => e.attributes['href'] === '/posts');

        expect(index).toBeGreaterThan(-1);
    });
})
