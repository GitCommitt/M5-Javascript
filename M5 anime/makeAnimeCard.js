export function makeAnimeCard(data){
    let cardEl = document.createElement("article");
    cardEl.className = "anime__card";

    let imgEl = document.createElement("img");
    imgEl.src = data.images.webp.large_image_url;
    imgEl.alt = "anime photo";
    imgEl.className = "anime__img"
    cardEl.appendChild(imgEl);

    let containerEl = document.createElement("div");
    containerEl.className = "anime__info";

    let titleEl = document.createElement("h2");
    titleEl.className = "anime__title";
    titleEl.innerText = data.title;
    containerEl.appendChild(titleEl);

    let synEl = document.createElement("p");
    synEl.className = "anime__synopsis";
    synEl.innerText = data.synopsis;
    containerEl.appendChild(synEl);

    let scoreEl = document.createElement("p");
    scoreEl.className = "anime__score";
    scoreEl.innerText = "Score: " + data.score;
    containerEl.appendChild(scoreEl);

    let genreEl = document.createElement("p");
    genreEl.className = "anime__genre";
    genreEl.innerText = "Genres: " + data.genres[0].name +" "+ data.genres[1].name +" "+ data.genres[2].name;
    containerEl.appendChild(genreEl);

    let ratingEl = document.createElement("p");
    ratingEl.className = "anime__rating";
    ratingEl.innerText = "Rating: " + data.rating;
    containerEl.appendChild(ratingEl);

    let episodesEl = document.createElement("p");
    episodesEl.className = "anime__episodes";
    episodesEl.innerText = "episodes: " + data.episodes;
    containerEl.appendChild(episodesEl);

    let studiosEl = document.createElement("p");
    studiosEl.className = "anime__studios";
    studiosEl.innerText = "Studio: " + data.studios[0].name;
    containerEl.appendChild(studiosEl);

    let explicit_genresEl = document.createElement("p");
    explicit_genresEl.className = "anime__explicit_genres";
    explicit_genresEl.innerText = "Explicit Genres: " + data.explicit_genres;
    containerEl.appendChild(explicit_genresEl);


    cardEl.appendChild(containerEl);

    let body = document.querySelector("body");
    body.appendChild(cardEl)
}