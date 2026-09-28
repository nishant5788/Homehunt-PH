import PopularCities from "../../components/PopularCities/PopularCities";
import WhyUs from "../../components/WhyUs/WhyUs";
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties";
import HeroBanner from "../../components/HeroBanner/HeroBanner";

function Home() {

  const API_KEY = import.meta.env.VITE_UNTERA_API_KEY;

async function testUntera() {
  const res = await fetch(
    "https://api.untera.io/api/v1/listings/search?country=PH&pageSize=20",
    {
      headers: {
        "X-API-Key": API_KEY,
      },
    }
  );

  const data = await res.json();

  console.log(data);
}

testUntera();

  return (
    <main>
      <HeroBanner />
      <FeaturedProperties />
      <WhyUs />
      {/* <PopularCities /> */}
    </main>
  );
}

export default Home;
