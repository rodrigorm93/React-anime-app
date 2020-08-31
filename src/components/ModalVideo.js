import React, { useState } from "react";
import { Modal } from "antd";
import ReactPlayer from "react-player";
import { useFetchVideo } from "../hooks/useFetchVideo";

import "./ModalVideo.scss";

export default function ModalVideo(props) {
  //isOpen =es el estado del modal si esta abierto o cerrado
  const { isOpen, close, keyVideo } = props;

  //const [urlVideo, setUrlVideo] = useState("");

  const { data, loading } = useFetchVideo(keyVideo);

  let urlVideo2 = null;
  if (data.length > 0) {
    urlVideo2 = data[0].video_url;
    //setUrlVideo(data[0].video_url);
  } else {
    urlVideo2 = data.video_url;
  }

  return (
    <div>
      <Modal
        className="modal-video"
        visible={isOpen}
        centered
        onCancel={close}
        footer={false}
      >
        <ReactPlayer url={urlVideo2} playing={isOpen} />
      </Modal>
    </div>
  );
}
