import { Component, OnInit } from "@angular/core";
import { Post, PostService } from "../services/posts.service";

@Component({
    selector: 'app-posts-page',
    templateUrl: './posts-page.component.html'
})

export class PostsPageComponent implements OnInit {
    constructor(
        private postService: PostService
    ){}

    posts: Post[] = [];

    ngOnInit(){
        this.postService.fetchPosts()
        .subscribe(response => this.posts = response)
    }
}