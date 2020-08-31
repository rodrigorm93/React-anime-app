export const getTopAnime = async () => {
  const url = "https://api.jikan.moe/v3/top/anime/1/upcoming";
  const resp = await fetch(url);
  const data = await resp.json();
  const topanimes_data = data.top.slice(0, 20).map((img) => {
    return {
      image_url: img.image_url,
      title: img.title,
      url: img.url,
    };
  });
  return topanimes_data;
};
