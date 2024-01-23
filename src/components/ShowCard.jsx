import React from "react";
import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";
import { Link } from "react-router-dom";

const ShowCard = ({ data }) => {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{ width: "300px" }}
    >
      <Card.Section>
        <Image
          src={data?.show?.image?.medium ?? data?.show?.image?.original}
          height={160}
          fit="contain"
          alt={data?.show?.name}
          fallbackSrc="https://placehold.co/300x160?text=Placeholder"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{data?.show?.name}</Text>
        <Badge variant="outline" color="gray">
          {data?.show?.language}
        </Badge>
      </Group>

      <Button
        component={Link}
        to={`/desc/${
          data?.show?.externals?.thetvdb ?? data?.show?.externals?.imdb
        }`}
        color="blue"
        fullWidth
        mt="md"
        radius="md"
      >
        Show More
      </Button>
    </Card>
  );
};

export default ShowCard;
