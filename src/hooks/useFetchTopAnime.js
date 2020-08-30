import { useEffect, useState } from "react";
import { getTopAnime } from "../helpers/getTopAnime";

export const useFetchTopAnime = () => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getTopAnime().then((img) => {
      setstate({
        data: img,
        loading: false,
      });
    });
  }, []);

  return state;
};
