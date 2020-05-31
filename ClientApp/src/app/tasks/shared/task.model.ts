import { Comment } from "src/app/comments/shared/comment.model";

export class Task {
    id: number;
    title: string;
    description: string;
    added: string;
    deadline: string;
    importance: string;
    state: string;
    closedAt: string;
    comments: Comment[];
    numberOfComments: number;
}
