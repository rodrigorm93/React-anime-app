import React from "react";
import { Modal } from "antd";
import ReactPlayer from "react-player";
import { Spinner } from "react-bootstrap";

import "./ModalVideo.scss";
import { useFetch } from "../hooks/useFetch";

export default function ModalVideo(props) {
  const { isOpen, close, keyVideo } = props;

  const url = `https://api.jikan.moe/v3/anime/${keyVideo}/videos`;
  const { data, loading } = useFetch(url);
  const { promo } = !!data && data; //si viene la data toammos la primea posicion, !! transformamo el null en false

  return (
    <div>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <Modal
          className="modal-video"
          visible={isOpen}
          centered
          onCancel={close}
          footer={false}
        >
          <ReactPlayer url={promo[0].video_url} playing={isOpen} />
        </Modal>
      )}
    </div>
  );
}
