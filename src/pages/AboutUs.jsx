import React from "react";
import Header from "../components/Header";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header Section */}
      <Header text="About Us" />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">
          About Intensivpflegedienst Lebenskraft
        </h2>
        <p className="mb-6">
          Founded by [Dr. Lutz Jakobides] on April 12, 2020,
          Intensivpflegedienst Lebenskraft is committed to providing
          exceptional, home-based intensive care services. We believe in
          delivering personalized, patient-centered care while providing
          independence and dignity for every individual.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <p className="mb-6">
          We offer specialized care services with a number of patients’ needs,
          ensuring high-quality medical support tailored to each person’s needs.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Care Contracts & Area</h2>
        <p className="mb-6">
          Our services are flexible, helping individuals to regain their health
          and overall independence, and we proudly service the
          Berlin-Brandenburg area.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Philosophy</h2>
        <p className="mb-6">
          We believe that health is the key to success. Fostering compassionate
          care that benefits both patients and our organization.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Care Values</h2>
        <p className="mb-6">
          Our values – openness, trust, respect, and inclusivity – guide
          everything we do, ensuring that all individuals are treated with
          dignity, regardless of background.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Patient Empowerment</h2>
        <p className="mb-6">
          Patients are empowered to reclaim their autonomy, with our
          professional team of nurses providing the best in-home care.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Employee-Centered Leadership
        </h2>
        <p className="mb-6">
          We offer the opportunity for continuous professional development,
          training, and a harmonious environment with flexible work schedules.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Commitment to Quality</h2>
        <p className="mb-6">
          We are committed to ensuring that our services meet the highest
          quality standards, ensuring safety, ethics, and legal aspects are
          respected.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Sustainability & Efficiency
        </h2>
        <p className="mb-6">
          Our services are designed to be economically sustainable as we support
          ongoing clinical research, ensuring our efficiencies are continually
          enhanced.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Excellence in Care</h2>
        <p className="mb-6">
          We strive to offer performance excellence, through the efficiency, and
          highest standards of our employees, guaranteeing top care for our
          patients.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
