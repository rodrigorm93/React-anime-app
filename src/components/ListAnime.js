import React, { useState } from "react";
import { Card } from "antd";
import { Spinner, Button } from "react-bootstrap";
import "./ListAnime.scss";
import ModalVideo from "./ModalVideo";
import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";
const { Meta } = Card;

export const ListAnime = ({ generoSelec }) => {
  const { counter, increment } = useCounter(1);

  //lista de animes
  const url = `https://api.jikan.moe/v3/genre/anime/${generoSelec.current}/${counter}`;
  const { data, loading } = useFetch(url);
  const { anime } = !!data && data; //si viene la data toammos la primea posicion, !! transformamo el null en false

  const [isVisibleModal, setVisibleModal] = useState(false);
  const [keyVideo, setKeyVideo] = useState("1");

  //Funcion para abrir el modal y cerrar
  const closeModal = () => {
    setVisibleModal(false);
  };

  return (
    <>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <>
          {anime.map((animes_selec) => (
            <Animes
              key={animes_selec.title}
              animes_selec={animes_selec}
              setKeyVideo={setKeyVideo}
              setVisibleModal={setVisibleModal}
              increment={increment}
            />
          ))}
        </>
      )}

      <div className="btn-list-anime">
        <Button onClick={increment} variant="outline-secondary">
          Siguiente
        </Button>
      </div>

      <ModalVideo
        keyVideo={keyVideo}
        isOpen={isVisibleModal}
        close={closeModal}
      />
    </>
  );
};

function Animes(props) {
  const {
    animes_selec: { image_url, synopsis, title, url, mal_id },
    setKeyVideo,
    setVisibleModal,
  } = props; //hacemos un doble destructuring a movie para sacar compoennete de la pelicula
  const openModal = () => setVisibleModal(true);
  const getKeyVideo = (mal_id) => {
    openModal();
    setKeyVideo(mal_id);
  };

  return (
    <div className="card-div">
      <Card
        className="card-list"
        hoverable
        cover={
          <img
            alt="example"
            src={image_url}
            onClick={() => getKeyVideo(mal_id)}
          />
        }
      >
        {synopsis ? (
          <Meta title={title} description={synopsis.substring(0, 50)} />
        ) : (
          <Meta title={title} />
        )}
        <a href={url}>Más...</a>
      </Card>
    </div>
  );
}
