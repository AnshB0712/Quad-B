import { Container, Loader, Text } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ShowCard from "./ShowCard";
import useGetData from "../hooks/useGetData";

const ShowAll = () => {
  const state = useGetData("https://api.tvmaze.com/search/shows?q=all");

  if (!state.data && !state.error)
    return (
      <Container>
        <Loader />
      </Container>
    );

  if (state.error)
    return (
      <Container>
        <Text>{state.error}</Text>
      </Container>
    );

  return (
    <Container
      style={{
        display: "grid",
        gridTemplateColumns: "repeat( auto-fit, minmax(330px, 1fr) )",
        placeItems: "center",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      {state.data.map((data) => (
        <ShowCard data={data} key={data?.show?.id} />
      ))}
    </Container>
  );
};

export default ShowAll;
