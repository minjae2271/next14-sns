"use client";

import { useQuery } from '@tanstack/react-query';
import { getFollowRecommends } from '../_lib/getFollowRecommends';
import { User } from '@/model/User';
import FollowRecommend from './FollowRecommend';

export default function FollowRecommendSection() {
    const { data } = useQuery<User[]>({
        queryKey: ['users', 'followRecommends'],
        queryFn: getFollowRecommends,
    });

    return data?.map((user) => <FollowRecommend key={user.id} user={user} />)
}