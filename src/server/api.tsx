"use server";

import { url } from "@/constants";
import getHotAnime from "@/logic/getHomeAnime";


const HomeAnime = async () => {
    const res = await fetch(url);
    const data = await res.text();
    return {
        data: getHotAnime(data)
    };
};
export default HomeAnime;