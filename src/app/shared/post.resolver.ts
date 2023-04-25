import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { inject } from "@angular/core";
import { Post, PostService } from "../services/posts.service";
import { Observable } from "rxjs";

export const PostResolver: ResolveFn<Post> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
): Observable<Post> => {
    return inject(PostService).getById(route.paramMap.get('id')!)
}
