import styles from './home.module.css';
import Tab from './_component/Tab';
import TabProvider from './_component/TabProvider';
import PostForm from './_component/PostForm';
import Post from '../_component/Post';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getPostRecommends } from '@/app/(afterLogin)/home/_lib/getPostRecommends'
import PostRecommends from './_component/PostRecommends';

export default async function Home() {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({ queryKey: ["posts", "recommends"], queryFn: getPostRecommends});
    const dehydrateState = dehydrate(queryClient);
    return (
        <main className={styles.main}>
            <HydrationBoundary state={dehydrateState}>
                <TabProvider>
                    <Tab />
                    <PostForm />
                    <PostRecommends />
                </TabProvider>
            </HydrationBoundary>
        </main>
    )
}