"use server";

import {redirect} from "next/navigation";

export default async (prevState: any, formData: FormData) => {
    let shouldRedirect = false;

    if (!formData.get('id')) {
        return { message: 'no_id'}
    }

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, {
            method: 'post',
            body: formData,
            credentials: 'include'
        });
        
        console.log(response.status);
        if (response.status === 403) {
            return {message: 'user_exists'}
        }

        console.log(await response.json());
        shouldRedirect = true;
    } catch (err) {
        console.error(err);
    }
    if (shouldRedirect) {
        redirect('/home');
    }
  }