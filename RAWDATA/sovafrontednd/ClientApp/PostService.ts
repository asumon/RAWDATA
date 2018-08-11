import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class PostService {
    constructor(private http: Http) {}

    getAllPosts() {
        return this.http.get('http://localhost:51644/api/posts').map((res: any) => res.json()) 
    }

    getPostById(postId: number) {
        console.log('http://localhost:51644/api/posts/19' + postId);
        return this.http.get('http://localhost:51644/api/posts/' + postId).map((res: any) => res.json());
    }

    getSearchPost(search: string) {
        console.log('http://localhost:51644/api/Search' + search)
        return this.http.get('http://localhost:51644/api/Search/' + search).map((res: any) => res.json());
    }
}