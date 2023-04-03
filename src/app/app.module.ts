import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        PostComponent
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
