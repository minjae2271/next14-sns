import { QueryFunction } from "@tanstack/react-query";
import { Post } from "@/model/Post";

export const getSinglePost: QueryFunction<Post, [_1: string, _2: string]>
= async ({ queryKey }) => {
    const [_1, id] = queryKey;
const res = await fetch(`https://localhost:9090/api/posts/${id}`, {
    next: {
        tags: ['posts', id]
    },
    // cache: 'no-store'
});

if (!res.ok) {
    throw new Error("Failed to fetch single post data");    
}

return res.json();
}