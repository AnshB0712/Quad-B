import { Text } from "@mantine/core";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav
        style={{
          width: "100%",
          background: "black",
          padding: "1rem",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Text ta={"center"} maw={600} c={"white"} size="xl">
          QuadB Assignment
        </Text>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
