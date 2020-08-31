export const getGenero = async (generoSelec) => {
  const url = `https://api.jikan.moe/v3/genre/anime/${generoSelec.current}/1`;
  const resp = await fetch(url);
  const data = await resp.json(); //slice(0, 50)
  const animes = data.anime.map((img) => {
    return {
      image_url: img.image_url,
      title: img.title,
      url: img.url,
      synopsis: img.synopsis,
      mal_id: img.mal_id,
    };
  });
  console.log("ss", data);
  return animes;
};
