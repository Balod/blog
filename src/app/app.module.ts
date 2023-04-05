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

@NgModule({
    declarations: [
        AppComponent,
        PostComponent,
        PostFormComponent,
        ClockComponent,
        StyleDirective,
        HideDirective,
        TwoOOsevenPipe,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
