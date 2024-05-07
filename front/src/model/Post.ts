import { User } from "./User";
import { PostImage } from "./PostImage";

export interface Post {
    postId: number,
    User: User,
    content: string,
    Images: PostImage[],
    createdAt: Date,
}