import background from "../assets/background3.svg";
import Header from "../components/Header";

const ContactUs = () => {
    return (
        <div className="flex flex-col font-roboto">
            <Header text="Contact" />
            <div className="container mx-auto px-4">
                <form className="flex flex-col gap-3 max-w-4xl mx-auto w-full ">
                    <h2 className="text-[#5E2866] my-8 font-semibold text-lg md:text-xl">
                        Contact
                    </h2>
                    <input
                        className="p-2 focus-visible:outline-purple-500 border border-[#c4c4c4] text-sm md:text-lg font-roboto text-slate-600"
                        type="text"
                        placeholder="Your First Name*"
                    />
                    <input
                        className="p-2 focus-visible:outline-purple-500 border border-[#c4c4c4] text-sm md:text-lg font-roboto text-slate-600"
                        type="text"
                        placeholder="Your Last Name*"
                    />
                    <input
                        className="p-2 focus-visible:outline-purple-500 border border-[#c4c4c4] text-sm md:text-lg font-roboto text-slate-600"
                        type="text"
                        placeholder="Street and house number"
                    />
                    <input
                        className="p-2 focus-visible:outline-purple-500 border border-[#c4c4c4] text-sm md:text-lg font-roboto text-slate-600"
                        type="text"
                        placeholder="Postal code and city"
                    />
                    <input
                        className="p-2 focus-visible:outline-purple-500 border border-[#c4c4c4] text-sm md:text-lg font-roboto text-slate-600"
                        type="email"
                        placeholder="Your email address"
                    />
                    <input
                        className="p-2 focus-visible:outline-purple-500 border border-[#c4c4c4] text-sm md:text-lg font-roboto text-slate-600"
                        type="text"
                        placeholder="Your phone number"
                    />
                    <textarea
                        className="w-full h-44 focus-visible:outline-purple-500 border border-[#c4c4c4] text-sm md:text-lg font-roboto text-slate-600 p-2"
                        placeholder="Your message*"
                    ></textarea>
                    <label
                        htmlFor="material-info"
                        className="font-normal text-sm md:text-lg text-[#656B72] flex gap-2"
                    >
                        <input
                            type="checkbox"
                            name="material-info"
                            id="material-info"
                        />
                        Please send me information material.
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 md:gap-7 mb-2">
                        <label
                            htmlFor="call-info"
                            className="font-normal text-sm md:text-lg text-[#656B72] flex gap-2 items-center"
                        >
                            <input
                                type="checkbox"
                                name="call-info"
                                id="call-info"
                            />
                            I would like to receive a call back on:
                        </label>
                        <input
                            type="datetime-local"
                            className="focus-visible:outline-purple-500 border border-[#c4c4c4] text-sm md:text-lg font-roboto text-slate-600 p-2"
                        />
                    </div>
                    <p className="font-normal text-sm md:text-lg text-[#656B72]">
                        How did you find out about us?
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 md:gap-7 mb-2">
                        <select className="bg-white w-full focus-visible:outline-purple-500 border border-[#c4c4c4] text-sm md:text-lg font-roboto text-slate-600 px-1 py-3">
                            <option value="default" className="bg-white">
                                -- Please Select --
                            </option>
                        </select>
                        <input
                            type="text"
                            className="focus-visible:outline-purple-500 border border-[#c4c4c4] text-sm md:text-lg font-roboto text-slate-600 p-2"
                            value="Miscelleous"
                        />
                    </div>
                    <p className="font-normal text-sm md:text-lg text-[#656B72]">
                        The fields marked with * are mandatory fields that are
                        necessary to process the contact request.
                    </p>

                    <label
                        htmlFor="policy"
                        className="font-normal text-sm md:text-lg text-[#656B72] flex gap-2"
                    >
                        <input type="checkbox" name="policy" id="policy" />I
                        hereby consent to the processing of my personal data for
                        the purpose of contacting me. Further information can be
                        found in our{" "}
                        <a href="#" className="text-[#5E2866]">
                            privacy policy
                        </a>
                        .
                    </label>

                    <button
                        type="submit"
                        className="text-white bg-[#5E2866] px-10 md:px-20 py-3 my-16 w-full md:w-fit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
