import React, { useState } from "react";
import { MenuApp } from "./components/MenuApp";

import "./AnimeApp.css";
import { CarouselsApp } from "./components/CarouselsApp";
import { ListAnime } from "./components/ListAnime";
import { Row, Container, Spinner } from "react-bootstrap";

import "./AnimeApp.css";
import { useFetch } from "./hooks/useFetch";
import { useCounter } from "./hooks/useCounter";
export const AnimeApp = () => {
  const { counter, increment, reset } = useCounter(1);
  const gener = ["Action", "Adventure", "Cars", "Comedy"];
  const [generoSelec, setGeneroSelec] = useState({
    current: 1,
  });

  //cargar los top anime
  const url = "https://api.jikan.moe/v3/top/anime/1/upcoming";
  const { data, loading } = useFetch(url);
  const topAnime = !!data && data.top; //si viene la data toammos la primea posicion, !! transformamo el null en false

  return (
    <Container fluid className="container-app">
      <Row>
        <MenuApp
          gener={gener}
          setGeneroSelec={setGeneroSelec}
          generoSelec={generoSelec}
          reset={reset}
        />
      </Row>
      <Row>
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <CarouselsApp topAnime={topAnime} />
        )}
      </Row>

      <Row>
        <ListAnime
          generoSelec={generoSelec}
          counter={counter}
          increment={increment}
        />
      </Row>
    </Container>
  );
};
