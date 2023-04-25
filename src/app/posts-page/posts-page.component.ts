import { Component, OnInit } from "@angular/core";
import { Post, PostService } from "../services/posts.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
    selector: 'app-posts-page',
    templateUrl: './posts-page.component.html'
})

export class PostsPageComponent implements OnInit {

    constructor(
        private postService: PostService,
        private route: ActivatedRoute,
        private router: Router
    ){}

    showId = false;

    posts: Post[] = [];

    ngOnInit(){
        this.postService.fetchPosts()
        .subscribe(response => this.posts = response);

        this.route.queryParams.subscribe(
            (params: Params) => {
                // Способ приобразования вызывает вопросы
                this.showId = !!params['showId'];
            });
    }

    showIdsProgramm() {
        this.router.navigate(
            ['/posts'],
            {
                queryParams: {showId: true},
                fragment: 'programmFragment'
            }
        )
    }
}
