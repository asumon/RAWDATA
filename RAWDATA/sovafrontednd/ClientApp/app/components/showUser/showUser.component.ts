
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { userService } from '../../../userService';


@Component({
    selector: 'sovaUser',
    templateUrl: './showUser.component.html',

})
export class showUserComponent implements OnInit {
    userId: any;
    user: any;
    constructor(private route: ActivatedRoute, private userService: userService) {

    }
    ngOnInit() {
        this.route.params.subscribe((params: Params) => { this.userId = params['id']; });
        if (this.userId) {
            this.userService.getUserById(this.userId).subscribe(result => {
                this.user = result[0]; console.log(this.user)

            })
        }
    }
}