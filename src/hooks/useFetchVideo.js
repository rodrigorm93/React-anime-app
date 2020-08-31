import { useEffect, useState } from "react";
import { getVideoAnime } from "../helpers/getVideoAnime";

export const useFetchVideo = (keyVideo) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getVideoAnime(keyVideo).then((video) => {
      setstate({
        data: video,
        loading: false,
      });
    });
  }, [keyVideo]);

  return state;
};
