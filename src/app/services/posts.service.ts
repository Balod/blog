import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

@Injectable({
    providedIn: 'root'
})

export class PostService {
    constructor(
        private http: HttpClient
    ){}

    fetchPosts(): Observable<Post[]>{
        return this.http.get<Post[]>(
            'https://jsonplaceholder.typicode.com/posts',
            {
                params: new HttpParams().set('_limit', '5')
            }
        )
    }

    getById(id:string): Observable<Post> {
        return this.http.get<Post>(
            `https://jsonplaceholder.typicode.com/posts/${id}`
        )
    }
}