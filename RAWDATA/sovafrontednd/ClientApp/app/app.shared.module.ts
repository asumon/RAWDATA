import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/Search/search.component';
import { UserComponent } from './components/User/user.component';
import { PostService } from '../PostService';
import { PostComponent } from './components/posts/post.component';
import { PaginationComponent } from './components/pagination/paging.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        PostComponent,
        UserComponent,
        SearchComponent,
        HomeComponent,
        PaginationComponent
    ],
    providers: [ PostService ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            
            { path: 'home', component: HomeComponent },
            { path: 'post/:id', component: PostComponent },
            { path: 'user', component: UserComponent },
            { path: 'search', component: SearchComponent },
            { path: 'search/:term', component: SearchComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
