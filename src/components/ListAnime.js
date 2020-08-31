import React, { useState } from "react";
import { Card } from "antd";
import { Spinner } from "react-bootstrap";
import "./ListAnime.scss";
import { useFetchGener } from "../hooks/useFetchGener";
import ModalVideo from "./ModalVideo";
const { Meta } = Card;

export const ListAnime = ({ generoSelec }) => {
  const { data: imagesAnime, loading } = useFetchGener(generoSelec);

  const [isVisibleModal, setVisibleModal] = useState(false);
  const [keyVideo, setKeyVideo] = useState("1");
  const [urlVideo, setUrlVideo] = useState("");
  //Funcion para abrir el modal y cerrar
  console.log("url_video:", urlVideo);
  const closeModal = () => {
    setVisibleModal(false);
    setUrlVideo("");
  };

  return (
    <>
      {loading && (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
      {imagesAnime.map((animes_selec) => (
        //<Col className="card-list"></Col>
        <Animes
          key={animes_selec.title}
          animes_selec={animes_selec}
          setKeyVideo={setKeyVideo}
          setVisibleModal={setVisibleModal}
        />
      ))}
      <ModalVideo
        keyVideo={keyVideo}
        isOpen={isVisibleModal}
        close={closeModal}
        setUrlVideo={setUrlVideo}
        urlVideo={urlVideo}
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
