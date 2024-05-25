import { Post } from "@/model/Post";
import { QueryFunction } from "@tanstack/react-query";

export const getSearchResult: QueryFunction<Post[], [_1: string, _2: string, searchParams: { q: string, f?: string, pf?: string }]>
    =  async ({queryKey}) => {
    const [_1, _2, searchParams] = queryKey;
    const urlSearchParams = new URLSearchParams(searchParams);
    const res = await fetch(`http://localhost:9090/api/posts?${urlSearchParams.toString()}`, {
       next: {
           tags: ["posts", "search", searchParams.q], //next caching은 객체 사용 불가!
       },
       cache: "no-store",
       credentials: 'include'
    });
    if (!res.ok) {
       throw new Error("Failed to fetch search data");
    }
    return res.json(); 
   }