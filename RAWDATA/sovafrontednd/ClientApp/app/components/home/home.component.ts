import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { PostService } from '../../../PostService';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styles: [`
     .glyphicon {
      color: #6b646b !important;

      font-size: 18px;
    }
    a {
       color: #3f3b3f;
    }
  `],
})
export class HomeComponent implements OnInit {

    posts: any;
    paging: any;
    sesearchTermarch: any;
    
    query:any ={
        pagesize: 100,
        Page: +this.currentPage
       
    }
    constructor(private postServie: PostService) {
        

        

    }

    ngOnInit() {

        this.getAllPosts();

        

    }
    getAllPosts() {

        this.postServie.getAllPosts().subscribe(x => {
            //this.posts = x.data['data'];
            this.posts = x;
            console.log(x)
            //  console.log(this.posts);
        });
        //  this.http.get('api/posts').map(res => res.json()).subscribe(result => { console.log(result) });

       
    }

    currentPage(value: string) {
        return value;
       // console.log(value);
    }

  

}
