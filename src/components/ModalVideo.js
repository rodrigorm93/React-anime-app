import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import ReactPlayer from "react-player";
import { useFetchVideo } from "../hooks/useFetchVideo";

import "./ModalVideo.scss";
import { getVideoAnime } from "../helpers/getVideoAnime";

export default function ModalVideo(props) {
  //isOpen =es el estado del modal si esta abierto o cerrado
  const { isOpen, close, keyVideo, setUrlVideo, urlVideo } = props;
  //const [urlVideo, setUrlVideo] = useState("");

  //const { data, loading } = useFetchVideo(keyVideo, setUrlVideo);
  //useFetchVideo(keyVideo, setUrlVideo);
  //let urlVideo2 = null;

  useEffect(() => {
    getVideoAnime(keyVideo).then((video) => {
      if (video.length > 0) {
        setUrlVideo(video[0].video_url);
      } else {
        setUrlVideo(video.video_url);
      }
    });
  }, [keyVideo]);

  //if (data.length > 0) {
  //urlVideo2 = data[0].video_url;
  // setUrlVideo(data[0].video_url);
  //} else {
  //urlVideo2 = data.video_url;
  //setUrlVideo(data.video_url);
  // }

  return (
    <div>
      <Modal
        className="modal-video"
        visible={isOpen}
        centered
        onCancel={close}
        footer={false}
      >
        <ReactPlayer url={urlVideo} playing={isOpen} />
      </Modal>
    </div>
  );
}
