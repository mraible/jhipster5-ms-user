import { Moment } from 'moment';
import { IBlog } from './blog.model';
import { ITag } from './tag.model';

export interface IEntry {
    id?: number;
    title?: string;
    content?: any;
    date?: Moment;
    blog?: IBlog;
    tags?: ITag[];
}

export class Entry implements IEntry {
    constructor(
        public id?: number,
        public title?: string,
        public content?: any,
        public date?: Moment,
        public blog?: IBlog,
        public tags?: ITag[]
    ) {}
}
