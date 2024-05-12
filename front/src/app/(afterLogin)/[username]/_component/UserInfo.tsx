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
  const { data: user, error, isLoading } = useQuery<User, Object, User, [_1: string, _2: string]>({
    queryKey: ['users', username],
    queryFn: getUser,
  });

  if (error) {
    <>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>프로필</h3>
      </div>
      <div className={style.userZone}>
        <div className={style.userImage}>
        </div>
        <div className={style.userName}>
          <div>@{username}</div>
        </div>
        <div className={style.noUserMessage}>
            계정이 존재하지 않음
        </div>
      </div>
    </>    
  }

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
