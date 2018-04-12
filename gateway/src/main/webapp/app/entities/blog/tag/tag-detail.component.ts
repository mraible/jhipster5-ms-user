import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITag } from 'app/shared/model/blog/tag.model';

@Component({
    selector: 'jhi-tag-detail',
    templateUrl: './tag-detail.component.html'
})
export class TagDetailComponent implements OnInit {
    tag: ITag;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.data.subscribe(({ tag }) => {
            this.tag = tag.body ? tag.body : tag;
        });
    }

    previousState() {
        window.history.back();
    }
}
