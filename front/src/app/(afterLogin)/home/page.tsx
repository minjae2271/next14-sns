import styles from './home.module.css';
import Tab from './_component/Tab';
import TabProvider from './_component/TabProvider';
import PostForm from './_component/PostForm';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getPostRecommends } from '@/app/(afterLogin)/home/_lib/getPostRecommends'
import TabDecider from './_component/TabDecider';

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
                    <TabDecider />
                </TabProvider>
            </HydrationBoundary>
        </main>
    )
}