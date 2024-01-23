import {
  BackgroundImage,
  Box,
  Center,
  Container,
  Group,
  Image,
  Loader,
  Text,
} from "@mantine/core";
import React from "react";
import { useParams } from "react-router-dom";
import TextDetails from "./TextDetails";
import useGetData from "../hooks/useGetData";

const Details = () => {
  const { id } = useParams();
  const state = useGetData(
    `https://api.tvmaze.com/lookup/shows?${
      id.toString().startsWith("tt") ? "imdb" : "thetvdb"
    }=${id}`
  );

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
    <Box mx="auto">
      <BackgroundImage
        src={state?.data?.image?.medium ?? state?.data?.image?.original}
        radius="sm"
      >
        <Center p="md" style={{ backdropFilter: "grayscale(100%) blur(8px)" }}>
          <Group>
            <Image
              radius={"lg"}
              fit="contain"
              src={state?.data?.image?.original ?? state?.data?.image?.medium}
              maw={"40%"}
              alt={state?.data?.name}
              style={{ aspectRatio: "3/2" }}
              fallbackSrc="https://placehold.co/300x160?text=Placeholder"
            />

            <TextDetails data={state.data} />
          </Group>
        </Center>
      </BackgroundImage>
    </Box>
  );
};

export default Details;
