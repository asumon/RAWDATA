import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class userService {
    constructor(private http: Http) {}

    getAllUsers() {
        console.log('http://localhost:51644/api/users');
        return this.http.get('http://localhost:51644/api/users').map((res: any) => res.json());
    }
    getUserById(userId: number) {
        console.log('http://localhost:51644/api/users/1' + userId);
        return this.http.get('http://localhost:51644/api/users/' + userId).map((res: any) => res.json());
    }
}