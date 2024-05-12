"use client"

import { Hashtag as IHashtag } from "@/model/Hashtag";
import Trend from "../../_component/Trend";
import { getTrends } from "../../_lib/getTrends";
import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';

export default function TrendSection() {
    const { data: session } = useSession();

    const { data } = useQuery<IHashtag[]>({
        queryKey: ['trends'],
        queryFn: getTrends,
        enabled: !!session?.user,
    })
    return data?.map((trend) => <Trend key={trend.tagId} trend={trend} />)
}