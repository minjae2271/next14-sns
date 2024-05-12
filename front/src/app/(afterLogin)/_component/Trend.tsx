import styles from './trend.module.css';
import Link from "next/link";
import { Hashtag as IHashtag } from "@/model/Hashtag";

type Props = {
    trend: IHashtag
}

export default function Trend({ trend } : Props) {
    return (
        <Link href={`/search?q=${trend.title}`} className={styles.container}>
            <div className={styles.count}>실시간 트렌드</div>
            <div className={styles.title}>{trend.title}</div>
            <div className={styles.count}>{trend.count.toLocaleString()}</div>
        </Link>
    )
}