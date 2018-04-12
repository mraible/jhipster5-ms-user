import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaySharedModule } from 'app/shared';
import { GatewayAdminModule } from 'app/admin/admin.module';
import {
    BlogService,
    BlogComponent,
    BlogDetailComponent,
    BlogUpdateComponent,
    BlogDeletePopupComponent,
    BlogDeleteDialogComponent,
    blogRoute,
    blogPopupRoute,
    BlogResolve
} from './';

const ENTITY_STATES = [...blogRoute, ...blogPopupRoute];

@NgModule({
    imports: [GatewaySharedModule, GatewayAdminModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [BlogComponent, BlogDetailComponent, BlogUpdateComponent, BlogDeleteDialogComponent, BlogDeletePopupComponent],
    entryComponents: [BlogComponent, BlogUpdateComponent, BlogDeleteDialogComponent, BlogDeletePopupComponent],
    providers: [BlogService, BlogResolve],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GatewayBlogModule {}
