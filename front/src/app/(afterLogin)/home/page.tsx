import { auth } from "@/auth";
import styles from './home.module.css';
import Tab from './_component/Tab';
import TabProvider from './_component/TabProvider';
import PostForm from './_component/PostForm';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getPostRecommends } from '@/app/(afterLogin)/home/_lib/getPostRecommends'
import TabDecider from './_component/TabDecider';

export default async function Home() {
    const session = await auth();
    const queryClient = new QueryClient();
    await queryClient.prefetchInfiniteQuery({ queryKey: ["posts", "recommends"], queryFn: getPostRecommends, initialPageParam: 0});
    const dehydrateState = dehydrate(queryClient);
    return (
        <main className={styles.main}>
            <HydrationBoundary state={dehydrateState}>
                <TabProvider>
                    <Tab /> 
                    <PostForm me={session}/>
                    <TabDecider />
                </TabProvider>
            </HydrationBoundary>
        </main>
    )
}