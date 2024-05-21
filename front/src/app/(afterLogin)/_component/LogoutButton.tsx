"use client"

import styles from "./logoutButton.module.css";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { Session } from "@auth/core/types";

type Props = {
    me: Session | null
}

export default function LogoutButton({ me }: Props) {
    const router = useRouter();
    
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