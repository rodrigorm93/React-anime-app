import React, { useEffect, useState } from "react";
import { Card, List } from "antd";
import { Col, Spinner } from "react-bootstrap";
import "./ListAnime.scss";
import { useFetchGener } from "../hooks/useFetchGener";
const { Meta } = Card;

export const ListAnime = ({ generoSelec }) => {
  console.log("genero:", generoSelec.current);

  const { data: imagesAnime, loading } = useFetchGener(generoSelec);

  return (
    <>
      {loading && (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
      {imagesAnime.map((animes_selec) => (
        <Col key={animes_selec.title} className="card-list">
          <Card
            hoverable
            cover={<img alt="example" src={animes_selec.image_url} />}
            key={animes_selec.title}
          >
            {animes_selec.synopsis ? (
              <Meta
                title={animes_selec.title}
                description={animes_selec.synopsis.substring(0, 20)}
                extra={<a href={animes_selec.url}>Más...</a>}
              />
            ) : (
              <Meta
                key={animes_selec.title}
                title={animes_selec.title}
                extra={<a href={animes_selec.url}>Más...</a>}
              />
            )}
          </Card>
        </Col>
      ))}
    </>
  );
};
