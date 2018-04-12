import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaySharedModule } from 'app/shared';
import {
    EntryService,
    EntryComponent,
    EntryDetailComponent,
    EntryUpdateComponent,
    EntryDeletePopupComponent,
    EntryDeleteDialogComponent,
    entryRoute,
    entryPopupRoute,
    EntryResolve
} from './';

const ENTITY_STATES = [...entryRoute, ...entryPopupRoute];

@NgModule({
    imports: [GatewaySharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [EntryComponent, EntryDetailComponent, EntryUpdateComponent, EntryDeleteDialogComponent, EntryDeletePopupComponent],
    entryComponents: [EntryComponent, EntryUpdateComponent, EntryDeleteDialogComponent, EntryDeletePopupComponent],
    providers: [EntryService, EntryResolve],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GatewayEntryModule {}
