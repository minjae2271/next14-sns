"use client";

import {useRouter} from "next/navigation";
import Main from "@/app/(beforeLogin)/_component/Main";
import {useSession} from "next-auth/react";

export default function Login() {
  const router = useRouter();
  const { data: session } = useSession();

  if (session?.user) {
    router.replace('/home');
    return null;
  }

  router.replace('/i/flow/login');
  return (
    <Main/>
  );
}

// import {redirect} from 'next/navigation'

// export default function Login() {
//     redirect('/i/flow/login')
// }


//router push : 뒤로 가기 하면 바로 전 단계!
// localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login
//router replace : 뒤로 가기 하면 전 전 단계!
// localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login