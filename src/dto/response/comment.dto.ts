export class CommnentResDto {
    _id: string;
    postId: string;
    avatar: string;
    level: number;
    name: {
        firstName: string;
        lastName: string;
    };
    content: string;
    image: string;
    parentId: string | null | undefined;
    commentsChildren: number;
    reaction: {
        title: string;
        userId: string;
    }[];
    createAt: string;
}

export class CreateCommentResDto {
    comment: CommnentResDto;
    after: string;
}