import { useState, useEffect } from "react";
import MainBanner from "../components/MainBanner";
import CoffeeCard from "../components/CoffeeCard";
import coffeeBanner from "../assets/coffee_banner.jpg";
import axiosInstance from "../utils/axiosInstance";
import { useBasket } from "../context/BasketContext";
import ItemCardSkeleton from "../components/skeletons/ItemCardSkeleton";

const Coffee = () => {
  const [coffeeTypes, setCoffeeTypes] = useState([]);
  const { setErrorData } = useBasket();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    (async () => {
      try {
        setErrorData(null)
        setLoading(true)

        const { data } = await axiosInstance.get("/coffee");
        setCoffeeTypes(data);
      } catch (error) {
        console.log(error);
        setErrorData({
          header: "Error fetching data",
          text: "There was an error getting the data. Please try again",
        });
      }finally{
        setLoading(false)
      }
    })();
  }, []);

  return (
    <div>
      <MainBanner
        cardHeader="COFFEE BLENDS"
        cardText="On our blends, you can depend..."
        imgSrc={coffeeBanner}
        imgAlt="coffee basket"
      />

      <div className="px-5 mx-auto mb-10 max-w-[1550px]">
        {
          loading ? (
            <ItemCardSkeleton type="coffee" />
          ) : (
            <div className="flex flex-col justify-center items-center lg:items-stretch lg:flex-row flex-wrap md:gap-10">
              {coffeeTypes.map((coffee, index) => (
                <CoffeeCard key={index + coffee.name} {...coffee} />
              ))}
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Coffee;
