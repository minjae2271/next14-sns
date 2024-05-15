"use client";

import {
  InfiniteData,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import { getPostRecommends } from "../_lib/getPostRecommends";
import Post from "../../_component/Post";
import { Post as IPost } from "@/model/Post";
import { Fragment } from "react";

export default function PostRecommends() {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery<
    IPost[],
    Object,
    InfiniteData<IPost[]>,
    [_1: string, _2: string],
    number
  >({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommends,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.at(-1)?.postId,
  });

  // return data?.map((post) => (
  //     <Post key={post.postId} post={post}  />
  // ))
  return (
    <>
      {data?.pages.map((page, i) => {
        <Fragment key={i}>
          {page.map((post) => (
            <Post key={post.postId} post={post} />
          ))}
        </Fragment>;
      })}
      <div ref={ref} style={{ height: 50 }}></div>
    </>
  );
}
