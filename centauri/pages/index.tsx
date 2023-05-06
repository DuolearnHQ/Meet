import type { NextPage } from "next";
import Seo from "./components/Seo";
import { Heading, Container } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Container>
      <Seo title="Home" />
      <Heading>Meet</Heading>
    </Container>
  );
};

export default Home;
