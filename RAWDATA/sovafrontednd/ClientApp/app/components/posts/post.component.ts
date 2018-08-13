
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostService } from '../../../PostService';


@Component({
    selector: 'sovaPost',
    templateUrl: './post.component.html',
  
})
export class PostComponent implements OnInit {
    comments: any;
    postId: number;
    post: any;
    constructor(private route: ActivatedRoute, private postService: PostService) {

    }
    ngOnInit() {
        this.route.params.subscribe((params: Params) => { this.postId = params['id'];  });
        if (this.postId) {
            this.postService.getPostById(this.postId).subscribe(result => {
                this.post = result[0];
                console.log(this.post);
                

            })
         }
    }
}