import { Component, HostBinding } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

export interface Post {
    title: string
    text: string
    id?: number
}

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html'
})

export class BlogComponent {
    constructor(
        private counterService: CounterService
    ){}

    @HostBinding('class') class = 'layered-content__item';

    title = 'Blog';

    posts: Post[] = [
        {
            title: '1 title',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugiat iste, corporis itaque cum rerum at ad totam explicabo maxime mollitia ut, reprehenderit dolores, odio voluptatum rem molestiae. Eos, et.',
            id: 1
        },
        {
            title: '2 title',
            text: 'Рандомный текст',
            id: 2
        }
    ]

    filteredPosts: Post[] = this.posts.slice(0, this.posts.length);

    addPost(post: Post) {
        post.id = this.posts.length + 1;
        this.posts.unshift(post);
    }

    onRemove(number: number) {
       this.filteredPosts = this.posts.filter(item => item.id != number)
    }

    increasePost() {
        this.counterService.increase();
        if(this.counterService.counter >= 0) {
            this.filteredPosts = this.posts.slice(0, this.counterService.counter);
        }
    }
    decreasePost() {
        this.counterService.decrease();
        if(this.counterService.counter >= 0) {
            this.filteredPosts  = this.posts.slice(0, this.counterService.counter);
        }
    }


}
