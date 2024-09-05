import MainLayout from "@/components/layouts/MainLayout";
import Container from "@/components/ui/Container";
import Gallery from "@/components/ui/Gallary";
import React from "react";
import { useParams } from "react-router-dom";

const Car = () => {
  const id = useParams();
  console.log(id);
  return (
    <MainLayout>
      <Container>
        <Gallery />
      </Container>
    </MainLayout>
  );
};

export default Car;
