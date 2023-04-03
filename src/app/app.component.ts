import { Component, ViewEncapsulation } from '@angular/core';
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

    addPost(post: Post) {
        post.id = this.posts.length + 1;
        this.posts.unshift(post);
        console.log(this.posts);
    }

    onRemove(number: number) {
       this.posts = this.posts.filter(item => item.id != number)
    }

}
