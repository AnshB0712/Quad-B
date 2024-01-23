import React from "react";
import { Button, Group, Stack, Text } from "@mantine/core";

const TextDetails = ({ data }) => {
  return (
    <Stack>
      <Stack gap={0}>
        <Group gap={0}>
          <Text fw={700} c="white" fz={"2.2rem"}>
            {data?.name}
          </Text>
          <Text fw={400} c="gray" fz={"2.2rem"}>
            {`(${data?.premiered?.slice(0, 4)})`}
          </Text>
        </Group>
        <Text c="white">{data?.genres?.join(" & ")}</Text>
      </Stack>

      <Stack gap={1}>
        <Text fw={600} fz={"1.3rem"} c="white">
          Overview
        </Text>
        <Text maw={600} c={"white"} size="sm">
          {data?.summary}
        </Text>
      </Stack>

      <Button fullWidth radius={"md"} mt={2} max={400} display={"block"}>
        Book Ticket
      </Button>
    </Stack>
  );
};

export default TextDetails;
