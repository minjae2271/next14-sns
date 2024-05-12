'use client'

import { useQuery } from '@tanstack/react-query';
import styles from './followRecommend.module.css';
import { getFollowRecommends } from '../_lib/getFollowRecommends';
import { User } from '@/model/User';

type props = {
    user: User
}

export default function FollowRecommend({ user } : props) {
   
    const onFollow = () => {};

    return (
        <div className={styles.container}>
            <div className={styles.userLogoSection}>
                <div className={styles.userLogo}>
                    <img src={user.image} alt={user.id} />
                </div>
            </div>
            <div className={styles.userInfo}>
                <div className={styles.title}>{user.nickname}</div>
                <div className={styles.count}>{user.id}</div>
            </div>
            <div className={styles.followButtonSection}>
                <button onClick={onFollow}>필로우</button>
            </div>
        </div>
    )
}