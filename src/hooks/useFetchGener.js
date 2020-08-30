import { useEffect, useState } from "react";
import { getGenero } from "../helpers/getGeneros";

export const useFetchGener = (generoSelec) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGenero(generoSelec).then((imgs) =>
      setstate({
        data: imgs,
        loading: false,
      })
    );
  }, [generoSelec]);

  return state;
};
