"use server";

import { redirect } from "next/navigation";
import { signIn } from "@/auth";

export default async function onSubmit (prevState: any, formData: FormData) {
    let shouldRedirect = false;

    if (!formData.get('id') || !(formData.get('id') as string)?.trim()) {
        return { message: 'no_id'}
    }

    formData.set('nickname', formData.get('name') as string);

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, {
            method: 'post',
            body: formData,
            credentials: 'include'
        });
        
        console.log(response.status);
        // console.log(response);
        if (response.status === 403) {
            return {message: 'user_exists'}
        }
        
        shouldRedirect = true;

        await signIn("credentials", {
            username: formData.get('id'),
            password: formData.get('password'),
            redirect: false,
        });
        
    } catch (err) {
        console.error(err);
        return {message: 'system_error'};
    }
    if (shouldRedirect) {
        console.log("redirect", shouldRedirect)
        redirect('/home');
    }
  }