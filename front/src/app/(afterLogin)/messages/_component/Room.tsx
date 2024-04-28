"use client"

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

import style from "../message.module.css";
import { faker } from "@faker-js/faker";
import {useRouter} from "next/navigation";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export function Room() {

    const router = useRouter();

    const user = {
        id: 'hero',
        nickname: 'saitama',
        Messages: [
            {
                roomId: 123,
                content: "Hi!",
                createdAt: new Date(),
            },
            {
                roomId: 123,
                content: "Halo!",
                createdAt: new Date(),
            },
        ]
    }

    const onClick = () => {
        router.push(`/messages/${user.Messages.at(-1)?.roomId}`)
    }

    return (
        <div className={style.room} onClickCapture={onClick}>
            <div className={style.roomUserImage}>
                <img src={faker.image.avatar()} alt="avatar" />
            </div>
            <div className={style.roomChatInfo}>
                <div className={style.roomUserInfo}>
                    <b>{ user.nickname }</b>
                    &nbsp;
                    <span>@{user.id}</span>
                    .
                    &nbsp;
                    <span className={style.postDate}>
                        {dayjs(user.Messages?.at(-1)?.createdAt).fromNow()}
                    </span>
                </div>
                <div className={style.roomLastChat}>
                    {user.Messages?.at(-1)?.content}
                </div>
            </div>
        </div>
    )
}