"use client";

import { useQuery } from "@tanstack/react-query";
import { getFollowingPosts } from "../_lib/getFollowingPosts";
import Post from "../../_component/Post";
import { Post as IPost } from "@/model/Post";

export default function PostRecommends() {
    const { data } = useQuery<IPost[]>({ queryKey: ["posts", "followings"], queryFn: getFollowingPosts});

    // return data?.map((post) => (
    //     <Post key={post.postId} post={post}  />
    // ))
    return data?.map((post) => {
        return <Post key={post.postId} post={post}  />
    })
}