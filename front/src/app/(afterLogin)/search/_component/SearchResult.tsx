"use client";

import { useQuery } from "@tanstack/react-query";
import { Post as IPost } from "@/model/Post";
import Post from "../../_component/Post";
import { getSearchResult } from "../_lib/getSearchResult";

type Props = {
    searchParams: { q: string, f?: string, pf?: string }
}

export default function SearchResult({ searchParams }: Props) {
    const { data } = useQuery<IPost[], Object, IPost[], [_1: string, _2: string, Props['searchParams']]>({ queryKey: ["posts","search", searchParams], queryFn: getSearchResult});
    console.log("q", searchParams.q)
    return data?.map((post) => (
        <Post key={post.postId} post={post} />
    ))
}