import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Offers from "../components/Offers";
import ServiceBackground from "../assets/background2.svg";

const Home = () => {
  return (
    <div>
      <Header text="Care and support in your own home" />

      <div className="py-10">
        <div className="text-center py-8">
          <h2 className="text-3xl font-semibold">Services</h2>
          <div className="flex justify-center">
            <div className="border-t-4 border-purple-500 w-12 mt-2"></div>
          </div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We provide comprehensive support from the clinic to the patient's
            home, ensuring continuity of care. Assistance with obtaining medical
            equipment and accompaniment to appointments outside the home are
            also guaranteed. Below is a list of services we offer.
          </p>
        </div>
        <div className="">
          <ServiceCard />
        </div>
        <img src={ServiceBackground} />

        <Offers />
      </div>
    </div>
  );
};

export default Home;
