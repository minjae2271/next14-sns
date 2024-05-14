import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query';
import style from './photoModal.module.css';
import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm";
import { getSinglePost } from '@/app/(afterLogin)/[username]/status/[id]/_lib/getSinglePost';
import { getComments } from '@/app/(afterLogin)/[username]/status/[id]/_lib/getComments';
import SinglePost from '@/app/(afterLogin)/[username]/status/[id]/_component/SinglePost';
import Comments from '@/app/(afterLogin)/[username]/status/[id]/_component/Comments';
import ImageZone from './_component/ImageZone';

type Props = {
  params: { id: string } 
}

export default async function PageModal({ params }: Props) {

  const { id } = params

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ['posts', id], queryFn: getSinglePost});
  await queryClient.prefetchQuery({ queryKey: ['posts', id, 'comments'], queryFn: getComments});
  const dehydrateState = dehydrate(queryClient);

    return (
        <div className={style.container}>
          <HydrationBoundary state={dehydrateState}>
          <ImageZone id={id}/>
          <div className={style.commentZone}>
            <SinglePost id={id} noImage />
            <CommentForm id={id}/>
            <Comments id={id} />
          </div>
          </HydrationBoundary>
        </div>
      ); 
}