"use client";

import { useState } from "react";

const PrivacyPolicy: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>("introduction");

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setCurrentTab(id);
    }
  };

  const toc = [
    { id: "introduction", title: "Introduction" },
    { id: "information-collection", title: "Information Collection & Use" },
    { id: "geolocation", title: "Location / Geolocation Services" },
    { id: "third-party-services", title: "Third-Party Services" },
    { id: "third-party-access", title: "Third-Party Access & Disclosure" },
    { id: "opt-out", title: "Opt-Out Rights" },
    { id: "data-retention", title: "Data Retention Policy" },
    { id: "children", title: "Children" },
    { id: "security", title: "Security" },
    { id: "changes", title: "Changes" },
    { id: "consent", title: "Your Consent" },
    { id: "contact", title: "Contact Us" },
  ];

  const effectiveDate = "2025-10-22";
  const currentYear = new Date().getFullYear();

  return (
    <section className="max-w-[1440px] mx-auto p-4">
      <div className="gap-4 flex mt-8">
        {/* Sidebar / Table of contents */}
        <div className="xl:w-[21.875rem] lg:w-[18.5rem] md:w-[15rem] hidden md:block">
          <div className="bg-white rounded-[12px] flex flex-col gap-2.5 p-[1rem] pb-[3.25rem]">
            {toc.map((item) => (
              <h6
                key={item.id}
                className={`${
                  currentTab === item.id
                    ? "font-semibold text-[#111928]"
                    : "underline text-[#6B7280]"
                } lg:text-base text-sm cursor-pointer`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.title}
              </h6>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div
          className="xl:p-[2rem] p-3 sm:p-6 md:p-7 text-[#111928] bg-white hide-scrollbar lg:rounded-[1.25rem] rounded-lg flex-1"
          style={{ height: "calc(100vh - 80px)", overflowY: "auto" }}
        >
          <h1 className="font-semibold text-[2.25rem] lg:mb-[2rem] mb-5 md:mb-7">
            Privacy Policy
          </h1>

          <div className="text-sm text-gray-600 mb-4">
            This privacy policy applies to the CommUnity app (the{" "}
            <strong>Application</strong>) created by{" "}
            <strong>3.14 Academy</strong> (the <strong>Service Provider</strong>
            ) and is provided "AS IS".
          </div>

          <div className="mb-6">
            <strong>Effective date:</strong> {effectiveDate} <br />
            <strong>Last Updated:</strong> {currentYear}
          </div>

          <h2 className="font-bold sm:text-2xl text-xl" id="introduction">
            Introduction
          </h2>
          <p className="font-medium sm:text-base text-sm mb-[1.5rem]">
            The Application collects certain information from users when the
            Application is downloaded and used. This Privacy Policy explains
            what information is collected, how it is used, shared, and the
            choices available to users regarding that information.
          </p>

          <h2
            className="font-bold sm:text-2xl text-xl"
            id="information-collection"
          >
            Information Collection & Use
          </h2>
          <p className="font-medium sm:text-base text-sm mb-[1rem]">
            The Application collects information when you download and use it.
            This information may include (but is not limited to):
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700 mb-4">
            <li>Your device's Internet Protocol address (e.g. IP address)</li>
            <li>
              The pages of the Application that you visit, the time and date of
              your visit, and the time spent on those pages
            </li>
            <li>The total time spent using the Application</li>
            <li>The operating system used on your mobile device</li>
          </ul>

          <h2 className="font-bold sm:text-2xl text-xl" id="geolocation">
            Location / Geolocation Services
          </h2>
          <p className="font-medium sm:text-base text-sm mb-[1rem]">
            The Application collects your device's location. Location data may
            be used for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700 mb-4">
            <li>
              <strong>Geolocation Services:</strong> To provide features such as
              personalized content, relevant recommendations, and location-based
              services.
            </li>
            <li>
              <strong>Analytics & Improvements:</strong> Aggregated and
              anonymized location data helps analyze user behavior, identify
              trends, and improve performance and functionality.
            </li>
            <li>
              <strong>Third-Party Services:</strong> Periodically, anonymized
              location data may be transmitted to external services that assist
              in enhancing the Application.
            </li>
          </ul>

          <h2
            className="font-bold sm:text-2xl text-xl"
            id="third-party-services"
          >
            Third-Party Services
          </h2>
          <p className="font-medium sm:text-base text-sm mb-[1rem]">
            The Application uses certain third-party services which have their
            own privacy practices. These include (but may not be limited to):
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700 mb-4">
            <li>Google Play Services</li>
            <li>Gmail SMTP</li>
            <li>Cloudinary</li>
            <li>Freepik API</li>
          </ul>

          <h2 className="font-bold sm:text-2xl text-xl" id="third-party-access">
            Third-Party Access & Disclosure
          </h2>
          <p className="font-medium sm:text-base text-sm mb-[1rem]">
            The Service Provider may share information in specific situations:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700 mb-4">
            <li>
              Only aggregated, anonymized data may be periodically transmitted
              to external services to help improve the Application.
            </li>
            <li>
              The Service Provider may disclose information to comply with legal
              obligations (e.g., subpoenas) or to protect rights, safety, or to
              investigate fraud.
            </li>
            <li>
              Trusted service providers who act on the Service Provider's behalf
              and are contractually bound not to independently use the
              information.
            </li>
          </ul>

          <h2 className="font-bold sm:text-2xl text-xl" id="opt-out">
            Opt-Out Rights
          </h2>
          <p className="font-medium sm:text-base text-sm mb-[1rem]">
            You can stop all collection of information by the Application by
            uninstalling it. Use the standard uninstall processes available on
            your device or via the application marketplace.
          </p>

          <h2 className="font-bold sm:text-2xl text-xl" id="data-retention">
            Data Retention Policy
          </h2>
          <p className="font-medium sm:text-base text-sm mb-[1rem]">
            The Service Provider will retain User Provided data for as long as
            you use the Application and for a reasonable time thereafter. If
            you'd like the Service Provider to delete User Provided data,
            contact:{" "}
            <a
              href="mailto:info@314academy.org"
              className="text-blue-600 underline hover:text-blue-800 transition"
            >
              info@314academy.org
            </a>
            .
          </p>

          <h2 className="font-bold sm:text-2xl text-xl" id="children">
            Children
          </h2>
          <p className="font-medium sm:text-base text-sm mb-[1rem]">
            The Service Provider does not knowingly solicit data from or market
            to children under 13. The Application does not address anyone under
            13. If it is discovered that a child under 13 has provided personal
            information, the Service Provider will promptly delete that data.
            Parents or guardians who become aware of such submission should
            contact:{" "}
            <a
              href="mailto:info@314academy.org"
              className="text-blue-600 underline hover:text-blue-800 transition"
            >
              info@314academy.org
            </a>
            .
          </p>

          <h2 className="font-bold sm:text-2xl text-xl" id="security">
            Security
          </h2>
          <p className="font-medium sm:text-base text-sm mb-[1rem]">
            The Service Provider uses physical, electronic, and procedural
            safeguards to protect information. While reasonable measures are
            taken to protect confidentiality, no system can guarantee absolute
            security.
          </p>

          <h2 className="font-bold sm:text-2xl text-xl" id="changes">
            Changes
          </h2>
          <p className="font-medium sm:text-base text-sm mb-[1rem]">
            This Privacy Policy may be updated from time to time. The Service
            Provider will notify users of changes by updating this page. You are
            advised to consult this Privacy Policy regularly; continued use of
            the Application after updates constitutes acceptance of changes.
          </p>

          <h2 className="font-bold sm:text-2xl text-xl" id="consent">
            Your Consent
          </h2>
          <p className="font-medium sm:text-base text-sm mb-[1rem]">
            By using the Application, you consent to the processing of your
            information as described in this Privacy Policy. You have the right
            to access, update, or request deletion of your information at any
            time.
          </p>

          <h2 className="font-bold sm:text-2xl text-xl" id="contact">
            Contact Us
          </h2>
          <p className="font-medium sm:text-base text-sm mb-[1.5rem]">
            If you have questions regarding privacy while using the Application,
            or questions about these practices, contact the Service Provider at:{" "}
            <a
              href="mailto:info@314academy.org"
              className="text-blue-600 underline hover:text-blue-800 transition"
            >
              info@314academy.org
            </a>
            .
          </p>

          <hr className="my-4" />

          <p className="text-xs text-gray-500">
            We follow U.S. privacy standards and comply with the General Data
            Protection Regulation (GDPR). European users may contact the Service
            Provider to exercise GDPR rights, including data portability and the
            right to be forgotten. For some communications the Service Provider
            may use the address <code>celeste@314academy.org</code>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
