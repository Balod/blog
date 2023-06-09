import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostFormComponent } from './post-form/post-form/post-form.component';
import { ClockComponent } from './clock/clock/clock.component';
import { StyleDirective } from './directives/style.directive';
import { HideDirective } from './directives/hide.directive';
import { TwoOOsevenPipe } from './pipes/two-o-o-seven.pipe';
import { FormComponent } from './form/form/form.component';
import { SwitchComponent } from './switch/switch/switch.component';
import { HttpClientFormComponent } from './httpClientForm/http-client-form/http-client-form.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { BlogComponent } from './blog/blog.component';
import { PostPageComponent } from './post-page/post-page.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { HeaderComponent } from './header/header.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ModalComponent } from './modal/modal.component';
import { RefDirective } from './directives/ref.directive';
import { CounterComponent } from './counter/counter.component';
import { RoutingComponent } from './routing/routing.component';
import { ColorDirective } from './directives/color.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const interceptorsProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
}
@NgModule({
    declarations: [
        AppComponent,
        PostComponent,
        PostFormComponent,
        ClockComponent,
        StyleDirective,
        HideDirective,
        TwoOOsevenPipe,
        FormComponent,
        SwitchComponent,
        HttpClientFormComponent,
        BlogComponent,
        PostsPageComponent,
        PostPageComponent,
        HeaderComponent,
        ErrorPageComponent,
        HomePageComponent,
        ModalComponent,
        RefDirective,
        CounterComponent,
        RoutingComponent,
        ColorDirective,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
    ],
    providers: [
        interceptorsProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
