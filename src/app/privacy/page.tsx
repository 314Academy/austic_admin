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
    { id: "app-dependencies", title: "App Dependencies & SDKs" },
    { id: "permissions", title: "Permissions Used" },
    { id: "third-party-access", title: "Third-Party Access & Disclosure" },
    { id: "opt-out", title: "Opt-Out Rights" },
    { id: "data-retention", title: "Data Retention Policy" },
    { id: "children", title: "Children" },
    { id: "security", title: "Security" },
    { id: "google-play-compliance", title: "Google Play Compliance" },
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
            ) and is provided &quot;AS IS&quot;.
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
            what information is collected, why it is collected, how it is used,
            with whom it may be shared, and the controls you have over that
            information.
          </p>

          <h2
            className="font-bold sm:text-2xl text-xl"
            id="information-collection"
          >
            Information Collection & Use
          </h2>
          <p className="font-medium sm:text-base text-sm mb-[1rem]">
            The Application collects information necessary to provide features
            and to improve the product. This may include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700 mb-4">
            <li>Your device&apos;s Internet Protocol address (IP address).</li>
            <li>
              Analytics about pages/screens visited in the Application, event
              times and durations.
            </li>
            <li>Total time spent using the Application.</li>
            <li>The operating system version and device model.</li>
            <li>
              Personal data you explicitly provide (e.g., contact details if you
              choose to share them via the Application).
            </li>
          </ul>

          <h2 className="font-bold sm:text-2xl text-xl" id="geolocation">
            Location / Geolocation Services
          </h2>
          <p className="font-medium sm:text-base text-sm mb-[1rem]">
            Where enabled, the Application may collect precise or approximate
            device location to provide location-based features (for example:
            local recommendations or location-enabled services). Location data
            is only collected with your consent and may be used for feature
            functionality, analytics (aggregated), and to improve service
            quality.
          </p>
          <p className="text-sm text-gray-600 mb-4">
            If the app requests background location access, we will only use it
            when required for a core feature. Background location access is
            restricted by Google Play and must be justified in the Play Console
            when requested. Please review your Play Console location
            declarations if you request background location.{" "}
          </p>

          <h2
            className="font-bold sm:text-2xl text-xl"
            id="third-party-services"
          >
            Third-Party Services
          </h2>
          <p className="font-medium sm:text-base text-sm mb-[1rem]">
            The Application uses third-party services for functionality and
            hosting. These services have their own privacy practices. We
            encourage you to review their privacy policies in addition to this
            document.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700 mb-4">
            <li>Google Play Services (may include analytics and location)</li>
            <li>Gmail / SMTP (for outbound emails)</li>
            <li>Cloudinary (media hosting/processing)</li>
            <li>Freepik API (assets)</li>
          </ul>

          <h2 className="font-bold sm:text-2xl text-xl" id="app-dependencies">
            App Dependencies & SDKs
          </h2>
          <p className="font-medium sm:text-base text-sm mb-[1rem]">
            For transparency (and to help you complete Play Console Data safety
            disclosures), below is the list of major Flutter packages used in
            the Application and a short note about what each package *may*
            access or require. If a package accesses personal data or system
            identifiers, it must be declared in your Data safety form.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700 mb-4">
            <li>
              <strong>cupertino_icons</strong> — UI icons only (no data
              collection).
            </li>
            <li>
              <strong>nb_utils</strong> — UI helpers (usually no telemetry, but
              depends on usage).
            </li>
            <li>
              <strong>build_runner / mobx_codegen</strong> — build-time dev
              tools (no runtime data collection).
            </li>
            <li>
              <strong>
                flutter_svg / flutter_phosphor_icons / flutter_launcher_icons
              </strong>{" "}
              — assets/icons (no data collection).
            </li>
            <li>
              <strong>intl</strong> — localization utilities (no data
              collection).
            </li>
            <li>
              <strong>story / dropdown_search / fl_chart / shimmer</strong> — UI
              components (no telemetry by default).
            </li>
            <li>
              <strong>dio</strong> — HTTP client (makes network requests — any
              data you send via dio should be disclosed where required).
            </li>
            <li>
              <strong>flutter_easyloading</strong> — UI loading overlay (no data
              collection).
            </li>
            <li>
              <strong>shared_preferences</strong> — local storage of settings
              and small data (on-device only).
            </li>
            <li>
              <strong>device_info_plus</strong> — collects device identifiers
              and device metadata (used for diagnostics/analytics). Declare as
              device identifiers in Data safety if used at runtime.
            </li>
            <li>
              <strong>mobx / flutter_mobx</strong> — state management (no data
              collection).
            </li>
            <li>
              <strong>pinput</strong> — UI OTP input (no data collection by
              itself).
            </li>
            <li>
              <strong>flutter_native_splash</strong> — build-time splash (no
              runtime data collection).
            </li>
            <li>
              <strong>image_picker</strong> — accesses camera and gallery
              (declare CAMERA and READ/WRITE storage/photos permissions and
              usage).
            </li>
            <li>
              <strong>transparent_image / cached_network_image</strong> — image
              loading/cache (makes network requests to fetch images).
            </li>
            <li>
              <strong>flutter_dotenv</strong> — environment variables
              (dev/runtime config; be sure not to ship secret keys in client
              builds).
            </li>
            <li>
              <strong>url_launcher</strong> — opens URLs in external apps (no
              automatic data collection but may pass user-provided URLs).
            </li>
            <li>
              <strong>flutter_native_contact_picker</strong> — access to
              contacts; must declare contact access and purpose if used.
            </li>
            <li>
              <strong>shimmer</strong> — UI (no data collection).
            </li>
            <li>
              <strong>signalr_netcore</strong> — realtime connections over the
              network (may send/receive user data through your own backend).
            </li>
          </ul>

          <h2 className="font-bold sm:text-2xl text-xl" id="permissions">
            Permissions Used
          </h2>
          <p className="font-medium sm:text-base text-sm mb-[1rem]">
            The app may request the following runtime permissions depending on
            features you enable. Each declared permission should have a clear
            user-facing purpose:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700 mb-4">
            <li>Location (ACCESS_FINE_LOCATION / ACCESS_COARSE_LOCATION)</li>
            <li>Camera (CAMERA)</li>
            <li>
              Photo / Media / Files (READ_EXTERNAL_STORAGE /
              WRITE_EXTERNAL_STORAGE / READ_MEDIA_IMAGES)
            </li>
            <li>
              Contacts (READ_CONTACTS) — only if contact features are provided
            </li>
            <li>
              Network access (INTERNET) — for API calls and image fetching
            </li>
          </ul>

          <h2 className="font-bold sm:text-2xl text-xl" id="third-party-access">
            Third-Party Access & Disclosure
          </h2>
          <p className="font-medium sm:text-base text-sm mb-[1rem]">
            We may share aggregated and anonymized information with third-party
            analytics and hosting providers to improve the Application. We will
            not sell personal data. Where we rely on third-party services that
            collect or process user data, we require them to act only under our
            instructions and to comply with applicable privacy laws.
          </p>

          <h2 className="font-bold sm:text-2xl text-xl" id="opt-out">
            Opt-Out Rights
          </h2>
          <p className="font-medium sm:text-base text-sm mb-[1rem]">
            You can stop collection by uninstalling the Application; for
            server-side data deletion requests please contact us (see Contact
            Us).
          </p>

          <h2 className="font-bold sm:text-2xl text-xl" id="data-retention">
            Data Retention Policy
          </h2>
          <p className="font-medium sm:text-base text-sm mb-[1rem]">
            We retain user-provided data only as long as necessary to operate
            and improve the Application and to satisfy legal obligations. To
            request deletion of your data, contact us at the email below.
          </p>

          <h2 className="font-bold sm:text-2xl text-xl" id="children">
            Children
          </h2>
          <p className="font-medium sm:text-base text-sm mb-[1rem]">
            We do not knowingly collect personal information from children under
            13. If we become aware of such collection, we will delete the data.
            Parents or guardians should contact us to request removal.
          </p>

          <h2 className="font-bold sm:text-2xl text-xl" id="security">
            Security
          </h2>
          <p className="font-medium sm:text-base text-sm mb-[1rem]">
            We use reasonable administrative, technical, and physical safeguards
            to protect personal data. However, no method of transmission or
            storage is 100% secure—absolute security cannot be guaranteed.
          </p>

          <h2
            className="font-bold sm:text-2xl text-xl"
            id="google-play-compliance"
          >
            Google Play Compliance & Data Safety
          </h2>
          <p className="font-medium sm:text-base text-sm mb-[1rem]">
            We complete the Google Play Data safety form and strive to ensure
            that the app’s behavior matches what is declared in Play Console.
            Common reasons for vague “Not adhering to Google Play Developer
            Program policies” rejections include: an inaccurate Data safety
            form, undeclared use of location/contact/camera, or requesting
            background location without justification.
          </p>
          <p className="text-sm text-gray-600 mb-4">
            If you received that rejection from Google Play, double-check that:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700 mb-4">
            <li>
              The Play Console Data safety form accurately reflects what the app
              and included SDKs actually collect and share.
            </li>
            <li>
              Any requested permissions (especially background location and
              contacts) are declared, justified, and user-facing consent flows
              are present.
            </li>
            <li>
              The privacy policy URL in Play Console is reachable, contains
              these disclosures, and matches the declared Data safety choices.
            </li>
          </ul>

          <h2 className="font-bold sm:text-2xl text-xl" id="changes">
            Changes
          </h2>
          <p className="font-medium sm:text-base text-sm mb-[1rem]">
            This Privacy Policy may be updated from time to time. We will notify
            users by updating this page. Please review this document
            periodically; continued use after updates constitutes acceptance.
          </p>

          <h2 className="font-bold sm:text-2xl text-xl" id="consent">
            Your Consent
          </h2>
          <p className="font-medium sm:text-base text-sm mb-[1rem]">
            By using the Application you consent to the processing described in
            this policy. You may request access, correction, or deletion of your
            data by contacting us.
          </p>

          <h2 className="font-bold sm:text-2xl text-xl" id="contact">
            Contact Us
          </h2>
          <p className="font-medium sm:text-base text-sm mb-[1.5rem]">
            If you have questions regarding privacy while using the Application
            or wish to request data deletion, contact the Service Provider at:{" "}
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
            We follow U.S. privacy standards and comply with GDPR. European
            users may contact the Service Provider to exercise GDPR rights,
            including data portability and the right to be forgotten. For some
            communications the Service Provider may use the address{" "}
            <code>celeste@314academy.org</code>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
