export const getVideoAnime = async (keyVideo) => {
  const url = `https://api.jikan.moe/v3/anime/${keyVideo}/videos`;
  const resp = await fetch(url);
  const data = await resp.json(); //slice(0, 50)
  const url_video = data.promo;

  // console.log("s", url_video);

  return url_video;
};
