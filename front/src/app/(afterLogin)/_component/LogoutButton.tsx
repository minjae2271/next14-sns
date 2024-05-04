"use client"

import styles from "./logoutButton.module.css";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

export default function LogoutButton() {
    const router = useRouter();
    
    // const me = {
    //     id: 'minjae',
    //     nickname: 'elgol',
    //     image: '/5Udwvqim.jpg',
    // }

    const { data: me } = useSession();


    const onLogout = async () => {
        try{
            await signOut({ redirect: false })
            router.replace('/')
        } catch(err) {

        }
    }

    if (!me?.user) {
        return null;
    }

    return (
        <button className={styles.logOutButton} onClick={onLogout}>
            <div className={styles.logOutUserImage}>
                <img src={me?.user?.image!} alt={me.user.image as string} />
            </div>
            <div className={styles.logOutUserName}>
                <div>{me?.user?.email}</div>
                <div>@{me?.user?.name}</div>
            </div>
        </button>
    )
}