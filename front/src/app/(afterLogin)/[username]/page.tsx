import style from './profile.module.css';
import Post from "@/app/(afterLogin)/_component/Post";
import BackButton from "@/app/(afterLogin)/_component/BackButton";
import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query';
import UserPosts from './_component/UserPosts';
import { getUserPosts } from './_lib/getUserPosts';
import UserInfo from './_component/UserInfo';
import { getUser } from './_lib/getUser';

type Props = {
  params: {username: string}
}

export default async function Profile({ params }: Props) {

  const { username } = params

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ['users', username], queryFn: getUser});
  await queryClient.prefetchQuery({ queryKey: ['posts', 'users', username], queryFn: getUserPosts});
  const dehydrateState = dehydrate(queryClient);

  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydrateState}>
      <UserInfo username={username}/>
      <div>
        <UserPosts username={username}/>
      </div>
      </HydrationBoundary>
    </main>
  )
}