'use client'

import { useState } from 'react';
import styles from './tab.module.css';

export default function Tab() {

    const [tab, setTab] = useState('Rec');
    const onClickRec = () => {
        setTab('Rec');
    };
    const onClickFol = () => {
        setTab('Fol');
    };

    return (
        <div className={styles.homeFixed}>
            <div className={styles.homeText}>홈</div>
            <div className={styles.homeTab}>
                <div onClick={onClickRec}>
                    추천
                    <div className={styles.tabIndicator} hidden={tab === 'Fol'}></div>
                </div>
                <div onClick={onClickFol}>
                    팔로우 중
                    <div className={styles.tabIndicator} hidden={tab === 'Rec'}></div>
                </div>
            </div>
        </div>
    )
}