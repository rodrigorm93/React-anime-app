import React, { useState } from "react";
import { MenuApp } from "./components/MenuApp";

import "./AnimeApp.css";
import { CarouselsApp } from "./components/CarouselsApp";
import { ListAnime } from "./components/ListAnime";
import { Row, Container } from "react-bootstrap";
import { useFetchTopAnime } from "./hooks/useFetchTopAnime";

export const AnimeApp = () => {
  const [gener, setGener] = useState(["Action", "Adventure", "Cars", "Comedy"]);
  const [generoSelec, setGeneroSelec] = useState({
    current: 1,
  });

  const { data: topAnime, loading } = useFetchTopAnime();
  return (
    <Container fluid>
      <Row>
        <MenuApp
          gener={gener}
          setGeneroSelec={setGeneroSelec}
          generoSelec={generoSelec}
        />
      </Row>
      <Row>
        <CarouselsApp topAnime={topAnime} />
      </Row>

      <Row>
        <ListAnime generoSelec={generoSelec} />
      </Row>
    </Container>
  );
};
