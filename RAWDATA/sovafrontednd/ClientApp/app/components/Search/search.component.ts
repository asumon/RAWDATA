import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { PostService } from '../../../PostService';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'Search',
    templateUrl: './search.component.html'
})
export class SearchComponent {
    posts: any;
    searchTerm: string;
    constructor(private postService: PostService, private route: ActivatedRoute) {

    }
    ngOnInit() {
        this.route.params.subscribe((params: Params) => { this.searchTerm = params['term']; });
        if (this.searchTerm) {
            this.postService.getSearchPost(this.searchTerm).subscribe(result => {
                this.posts = result;

            })
        }
    }

   
    
}
