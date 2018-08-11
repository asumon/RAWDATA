import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { userService } from '../../../userService';
@Component({
    selector: 'sovauser',
    templateUrl: './user.component.html'
})
export class UserComponent {
    users: any;
    constructor(private route: ActivatedRoute, private userService: userService) {

    }
    ngOnInit() {
        this.getAllUsers();
    }
    getAllUsers() {

        this.userService.getAllUsers().subscribe(x => {
            //this.posts = x.data['data'];
            this.users = x;
            console.log(x)
            //  console.log(this.posts);
        });
        //  this.http.get('api/posts').map(res => res.json()).subscribe(result => { console.log(result) });


    }
        }