import { Post } from './../app.component';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html'
})


export class PostComponent {
    @Input() post: Post | undefined;
    date: Date | undefined;
}
