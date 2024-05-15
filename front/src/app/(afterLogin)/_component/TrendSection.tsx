"use client"

import styles from './trendSection.module.css';
import Trend from './Trend';
import { Hashtag as IHashtag } from "@/model/Hashtag";
import { getTrends } from '../_lib/getTrends';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';

export default function TrendSection() {
    const pathname = usePathname(); // /부터 ?까지
    const { data: me } = useSession();

    const { data } = useQuery<IHashtag[]>({
        queryKey: ['trends'],
        queryFn: getTrends,
        enabled: !!me?.user,
    })

    if(pathname === '/explore') return null;

    if ( me?.user) {
        return (
            <div className={styles.trendBg}>
                <div className={styles.trend}>
                    <h3>나를 위한 트렌드</h3>
                    {data?.map((trend) => <Trend key={trend.tagId} trend={trend} />)}
                </div>
            </div>
        )
    }
    return (
        <div className={styles.trendBg}>
            <div className={styles.trend}>
                <h3>트렌드를 가져 올 수 없습니다.</h3>
            </div>
        </div>
    )
}