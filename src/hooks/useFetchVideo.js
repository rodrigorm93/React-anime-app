import { useEffect, useState } from "react";
import { getVideoAnime } from "../helpers/getVideoAnime";

export const useFetchVideo = (keyVideo, setUrlVideo) => {
  const [state, setstate] = useState("");

  useEffect(() => {
    getVideoAnime(keyVideo).then((video) => {
      setstate(video[0].video_url);
      console.log(video[0].video_url);
    });
    setUrlVideo(state.video_url);
  }, [keyVideo]);

  //return state;
};
