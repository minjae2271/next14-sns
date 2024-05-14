"use client";

import { useQuery } from "@tanstack/react-query"
import { getSinglePost } from "../_lib/getSinglePost";
import Post from "@/app/(afterLogin)/_component/Post";
import { Post as IPost } from "@/model/Post";
import style from "./singlePost.module.css";

type Props = {
    id: string;
    noImage?: boolean;
}

export default function SinglePost({ id, noImage }: Props) {
    const { data: post, error } = useQuery<IPost, Object, IPost, [_1: string, _2: string]>({
        queryKey: ['posts', id],
        queryFn: getSinglePost,
    });

    if (error) {
        return (
            <div className={style.noPostMessage}>
                게시글을 찾을 수 없습니다.
            </div>
        )
    }

    if (!post) {
        return null;
    }
    
    return <Post key={post.postId} post={post} noImage={noImage}/>
}