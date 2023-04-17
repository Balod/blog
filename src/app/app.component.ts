import { Component, ViewEncapsulation } from '@angular/core';
import { CounterService } from './services/counter.service';
import { TabEnum } from './enums/enums';
export interface Post {
    title: string
    text: string
    id?: number
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    constructor(
        private counterService: CounterService
    ){}

    title = 'Blog';
    tab = 'httpClientForm';
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
        console.log(this.posts);
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

    changeTab(event: Event) {
        let buttonId = (event.target as HTMLElement).id;

        switch (buttonId) {
            case TabEnum.blog:
                this.tab = TabEnum.blog;
                break;
            case TabEnum.form:
                this.tab = TabEnum.form;
                break;
            case TabEnum.httpClientForm:
                this.tab = TabEnum.httpClientForm;
                break;
        }
    }

}
