import BackButton from "@/app/(afterLogin)/_component/BackButton";
import style from './singlePost.module.css';
import Post from "@/app/(afterLogin)/_component/Post";
import SinglePost from "./_component/SinglePost";
import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getSinglePost } from "./_lib/getSinglePost";

type Props = {
  params: { id: string },
}

export default async function SinglePostPage({ params } : Props) {
  const { id } = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ['posts', id], queryFn: getSinglePost});
  const dehydrateState = dehydrate(queryClient);
  return (
    <div className={style.main}>
      <HydrationBoundary state={dehydrateState}>
      <div className={style.header}>
        <BackButton/>
        <h3 className={style.headerTitle}>게시하기</h3>
      </div>
      <SinglePost id={id}/>
      <CommentForm />
      <div>
        {/* <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post /> */}
      </div>
      </HydrationBoundary>
    </div>
  )
}