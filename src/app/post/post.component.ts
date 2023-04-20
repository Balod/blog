import { Post } from '../blog/blog.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html'
})


export class PostComponent {
    @Input() post: Post;
    @Output() remove: EventEmitter<number> = new EventEmitter;

    onRemove() {
        this.remove.emit(this.post.id);
    }
}
