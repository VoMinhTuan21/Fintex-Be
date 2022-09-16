import { VisibleFor } from './enums';

declare interface IFeeling {
    name: string;
    emoji: string;
}

declare interface IFeelingUpdate {
    name?: string;
    emoji?: string;
}

declare interface ICreatePost {
    content?: string;
    feeling?: string;
    visibleFor: VisibleFor;
}

declare interface ICommentsIdPaginate {
    commentsId: string[];
    after: string;
    ended: boolean;
}
