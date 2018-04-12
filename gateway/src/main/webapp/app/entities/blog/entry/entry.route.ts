import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core';
import { Entry } from 'app/shared/model/blog/entry.model';
import { EntryService } from './entry.service';
import { EntryComponent } from './entry.component';
import { EntryDetailComponent } from './entry-detail.component';
import { EntryUpdateComponent } from './entry-update.component';
import { EntryDeletePopupComponent } from './entry-delete-dialog.component';

@Injectable()
export class EntryResolve implements Resolve<any> {
    constructor(private service: EntryService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id);
        }
        return new Entry();
    }
}

export const entryRoute: Routes = [
    {
        path: 'entry',
        component: EntryComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gatewayApp.blogEntry.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'entry/:id/view',
        component: EntryDetailComponent,
        resolve: {
            entry: EntryResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gatewayApp.blogEntry.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'entry/new',
        component: EntryUpdateComponent,
        resolve: {
            entry: EntryResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gatewayApp.blogEntry.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'entry/:id/edit',
        component: EntryUpdateComponent,
        resolve: {
            entry: EntryResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gatewayApp.blogEntry.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const entryPopupRoute: Routes = [
    {
        path: 'entry/:id/delete',
        component: EntryDeletePopupComponent,
        resolve: {
            entry: EntryResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gatewayApp.blogEntry.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
