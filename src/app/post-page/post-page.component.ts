import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Post, PostService } from '../services/posts.service';

@Component({
    selector: 'app-post-page',
    templateUrl: './post-page.component.html'
})
export class PostPageComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private postService: PostService
    ) { }

    post: Post;
    loading = false;

    ngOnInit() {
        this.loading = true;

        this.route.params
            .subscribe((params: Params) => {
                this.postService.getById(params['id'])
                    .subscribe(response => {
                        this.post = response;
                        this.loading = false;
                    })
            })
    }
}
