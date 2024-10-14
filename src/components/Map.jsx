import React from "react";

const Map = () => {
    return (
        <div className="w-full h-56">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.9651172144036!2d7.428675574152467!3d10.503413664171964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104d3565b10da073%3A0x6a9a663b752edc4b!2sLeadway%20Assurance%20Company%20Limited!5e0!3m2!1sen!2sng!4v1728607999178!5m2!1sen!2sng"
                style={{ border: 0, width: "100%", height: "100%" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default Map;
