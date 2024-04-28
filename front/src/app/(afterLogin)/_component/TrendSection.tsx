"use client"

import styles from './trendSection.module.css';
import Trend from './Trend';
import { usePathname } from 'next/navigation';

export default function TrendSection() {
    const pathname = usePathname(); // /부터 ?까지
    if(pathname === '/explore') return null;
    return (
        <div className={styles.trendBg}>
            <div className={styles.trend}>
                <h3>나를 위한 트렌드</h3>
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
            </div>
        </div>
    )
}