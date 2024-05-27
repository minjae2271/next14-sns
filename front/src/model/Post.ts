import { User } from "./User";
import { PostImage } from "./PostImage";

interface UserId {
    userId: string
}

export interface Post {
    postId: number,
    User: User,
    content: string,
    Images: PostImage[],
    createdAt: Date,
    Hearts: UserId[],
    Reposts: UserId[],
    Comments: UserId[],
    _count: {
        Hearts: number,
        Reposts: number,
        Comments: number,
    }
}