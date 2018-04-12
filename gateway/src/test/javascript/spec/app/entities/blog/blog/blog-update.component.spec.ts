/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { GatewayTestModule } from '../../../../test.module';
import { BlogUpdateComponent } from 'app/entities/blog/blog/blog-update.component';
import { BlogService } from 'app/entities/blog/blog/blog.service';
import { Blog } from 'app/shared/model/blog/blog.model';

import { UserService } from 'app/core';

describe('Component Tests', () => {
    describe('Blog Management Update Component', () => {
        let comp: BlogUpdateComponent;
        let fixture: ComponentFixture<BlogUpdateComponent>;
        let service: BlogService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [GatewayTestModule],
                declarations: [BlogUpdateComponent],
                providers: [UserService, BlogService]
            })
                .overrideTemplate(BlogUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(BlogUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(BlogService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new Blog(123);
                    spyOn(service, 'update').and.returnValue(Observable.of(new HttpResponse({ body: entity })));
                    comp.blog = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.update).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );

            it(
                'Should call create service on save for new entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new Blog();
                    spyOn(service, 'create').and.returnValue(Observable.of(new HttpResponse({ body: entity })));
                    comp.blog = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.create).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );
        });
    });
});
