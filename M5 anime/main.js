import { makeAnimeCard } from "./makeAnimeCard.js";

let url = "https://api.jikan.moe/v4/top/anime?type=tv";

async function fetcAnime(){
    let response = await fetch(url);
    let json = await response.json();
    
    json.data.forEach(animeData => {
        makeAnimeCard(animeData);
    });
}
fetcAnime();