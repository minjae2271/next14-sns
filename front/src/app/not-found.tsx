import Link from 'next/link'
import { NextPage } from "next";

const NotFound: NextPage = () => {
    return (
        <div>
            <div>page not found</div>
            <Link href={"/search"}>검색</Link>
        </div>
    )
}

export default NotFound;