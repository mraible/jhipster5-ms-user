import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IBlog } from 'app/shared/model/blog/blog.model';

@Component({
    selector: 'jhi-blog-detail',
    templateUrl: './blog-detail.component.html'
})
export class BlogDetailComponent implements OnInit {
    blog: IBlog;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.data.subscribe(({ blog }) => {
            this.blog = blog.body ? blog.body : blog;
        });
    }

    previousState() {
        window.history.back();
    }
}
