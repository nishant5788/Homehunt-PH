import styles from "./Home.module.css";
import PopularCities from "../../components/PopularCities/PopularCities";
import WhyUs from "../../components/WhyUs/WhyUs";
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties";
import HeroBanner from "../../components/HeroBanner/HeroBanner";

function Home() {
  return (
    <main>
      <HeroBanner />
      <FeaturedProperties />
      <WhyUs />
      <PopularCities />
    </main>
  );
}

export default Home;
