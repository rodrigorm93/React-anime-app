import React from "react";

import { Carousel } from "react-bootstrap";

import "./CarouselsApp.scss";

export const CarouselsApp = ({ topAnime }) => {
  return (
    <Carousel className="carousels-app">
      {topAnime.map((topAnime_selec) => (
        <Carousel.Item>
          <img src={topAnime_selec.image_url} />

          <Carousel.Caption>
            <h3>{topAnime_selec.title}</h3>
            <p>
              <a href={topAnime_selec.url}>Descripción</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};