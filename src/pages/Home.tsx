import { CarFloat } from "@/components/CarFloat";
import { FeaturedCar } from "@/components/FeaturedCar";
import Review from "@/components/Review";

import Banner from "@/components/ui/Banner";
import Container from "@/components/ui/Container";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowWorks from "@/components/home/HowWorks";

function Home() {
  return (
    <div>
      <Banner />
      {/* <CarFloat /> */}
      <Container>
        <HowWorks />
        <FeaturedCar />

        <WhyChooseUs />
        <Review />
      </Container>
    </div>
  );
}

export default Home;
