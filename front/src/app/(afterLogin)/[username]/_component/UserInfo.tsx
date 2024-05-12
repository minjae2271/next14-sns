"use client";

import { useQuery } from "@tanstack/react-query";
import style from "../profile.module.css";
import BackButton from "@/app/(afterLogin)/_component/BackButton";
import { User } from "@/model/User";
import { getUser } from "../_lib/getUser";

type Props = {
    username: string
}

export default function UserInfo({ username }: Props) {
  const { data: user } = useQuery<User, Object, User, [_1: string, _2: string]>({
    queryKey: ['users', username],
    queryFn: getUser,
  });

  if (!user) {
    return null;
  }

  return (
    <>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>{user?.nickname}</h3>
      </div>
      <div className={style.userZone}>
        <div className={style.userImage}>
          <img src={user?.image} alt={user?.id} />
        </div>
        <div className={style.userName}>
          <div>{user?.nickname}</div>
          <div>@{user?.id}</div>
        </div>
        <button className={style.followButton}>팔로우</button>
      </div>
    </>
  );
}
