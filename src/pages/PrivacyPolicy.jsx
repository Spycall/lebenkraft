import React from "react";
import Header from "../components/Header";

const PrivacyPolicy = () => {
    return (
        <div className="bg-gray-100 text-gray-800">
            {/* Header Section */}
            <Header text="Privacy Policy" />

            {/* Privacy Policy Content */}
            <div className="max-w-5xl mx-auto p-6">
                <h2 className="text-2xl font-semibold mb-4">
                    1. Privacy Policy
                </h2>
                <p className="mb-6">
                    We at Intensivpflegedienst Lebenskraft take the protection
                    of your personal data very seriously and strictly adhere to
                    the rules of data protection laws. The use of our website is
                    generally possible without providing personal data.
                </p>

                <h2 className="text-2xl font-semibold mb-4">
                    2. Data Collection and Processing
                </h2>
                <p className="mb-6">
                    When you visit our website, we automatically collect and
                    store information in server log files that your browser
                    sends to us. This includes browser type, version, operating
                    system, referrer URL, host name of the accessing computer,
                    and time of the request.
                </p>

                <h2 className="text-2xl font-semibold mb-4">
                    3. Use of Personal Data
                </h2>
                <p className="mb-6">
                    Any personal data that you provide, such as your name,
                    address, or email, will only be used for the purposes of
                    fulfilling your requests or for technical administration.
                </p>

                <h2 className="text-2xl font-semibold mb-4">
                    4. Right to Information
                </h2>
                <p className="mb-6">
                    You have the right to request information at any time about
                    your stored personal data, its origin, and recipient, as
                    well as the purpose of the data processing.
                </p>

                <h2 className="text-2xl font-semibold mb-4">5. Security</h2>
                <p className="mb-6">
                    We strive to protect your data from unauthorized access,
                    loss, destruction, or manipulation. However, we cannot
                    guarantee absolute security.
                </p>

                <h2 className="text-2xl font-semibold mb-4">6. Contact</h2>
                <p className="mb-6">
                    If you have any questions regarding the processing of your
                    personal data, feel free to contact us at any time.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
