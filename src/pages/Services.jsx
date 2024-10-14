import ServiceCard from "../components/ServiceCard";
import serviceImg from "../assets/serviceImg.jpg";
import Header from "../components/Header";

const Services = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className=" flex flex-col gap-6">
                <Header text="Services" />
                <div className="container mx-auto">
                    <ServiceCard service={true} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 lg:gap-24 ">
                        <div className="flex flex-col gap-2 mt-4">
                            <h2 className="text-[#210E24] text-2xl md:text-3xl lg:text-4xl">
                                We support you professionally and with heart
                            </h2>
                            <p className="text-[#210E24] text-sm md:text-base">
                                Especially when your health is affected and you
                                have to get used to new circumstances, it is
                                even more important not to be torn from your
                                familiar surroundings. In these cases, we
                                support you and your family with daily care,
                                nursing and housekeeping. And we do this exactly
                                where you feel most comfortable - in your own
                                home! <br /> <br />
                                Our professional nursing team with additional
                                training provides sensitive care and support for
                                ventilated and non-ventilated patients in the
                                home environment. You can discuss your worries
                                and fears with us - together we will find
                                solutions for the respective challenges that can
                                arise in care and everyday situations.
                            </p>
                        </div>
                        <div className="w-full flex justify-end">
                            <img src={serviceImg} alt="service img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
