import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="text-black sm:px-0 px-4 font-sans my-5 min-h-screen container mx-auto">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy and Terms of Use for Octopus Game Studio</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-bold mb-2">1. Introduction</h2>
          <p className="mb-2 text-lg font-semibold">
            Welcome to Octopus Game Studio! This Privacy Policy and Terms of Use outline your rights and responsibilities when using our website and related services. By accessing or using our site, you agree to the terms set forth here. Please read carefully to understand our practices regarding your data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">2. Data Collection</h2>
          <p className="mb-2 text-lg font-semibold">
            We do not actively collect any personal information or data from our users.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">3. Use of Data</h2>
          <p className="mb-2 text-lg font-semibold">
            If we collect any data, it may be used solely for the following purposes:
          </p>
          <ul className="list-disc list-inside ml-4 font-medium space-y-1">
            <li>To operate and maintain our website.</li>
            <li>To manage user accounts or partner program participation.</li>
            <li>To respond to inquiries and provide updates.</li>
            <li>To improve site functionality and user experience.</li>
            <li>To comply with any applicable legal requirements.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">4. Third-Party Services</h2>
          <p className="mb-2 text-lg font-semibold">
            We may use third-party payment processors to handle transactions. Please refer to their respective privacy policies for information on how they handle data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">5. Data Processing Location</h2>
          <p className="mb-2 text-lg font-semibold">
            Data processed by Octopus Game Studio is managed in the United States, where our servers are located.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">6. Children's Privacy</h2>
          <p className="mb-2 text-lg font-semibold">
            Our services are accessible to all users but are not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with their personal information, please contact us, and we will promptly delete such data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">7. Security Measures</h2>
          <p className="mb-2 text-lg font-semibold">
            We employ reasonable security measures to protect user data from unauthorized access, but no method of online data storage is completely secure. We encourage users to take precautions when sharing information online.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">8. GDPR Data Protection Rights</h2>
          <p className="mb-2 text-lg font-semibold">
            We uphold GDPR data protection rights. Users have the following rights:
          </p>
          <ul className="space-y-2 ml-4 list-disc">
            <li className='font-medium'>
              <span className="font-bold text-lg">Right to Access:</span> Request copies of your personal data.
            </li>
            <li className='font-medium'>
              <span className="font-bold text-lg">Right to Rectification:</span> Request correction of inaccurate or incomplete information.
            </li>
            <li className='font-medium'>
              <span className="font-bold text-lg">Right to Erasure:</span> Request deletion of personal data under certain conditions.
            </li>
            <li className='font-medium'>
              <span className="font-bold text-lg">Right to Restrict Processing:</span> Request limited processing of your data.
            </li>
            <li className='font-medium'>
              <span className="font-bold text-lg">Right to Object:</span> Object to the processing of your data.
            </li>
            <li className='font-medium'>
              <span className="font-bold text-lg">Right to Data Portability:</span> Request transfer of your data to another organization or to you.
            </li>
          </ul>
          <p className="mb-2 text-lg font-medium">
            We aim to respond to all requests within one month. Contact us to exercise these rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">9. CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
          <p className="mb-2 text-lg font-semibold">
            Under CCPA, California residents have the following rights:
          </p>
          <ul className="space-y-2 ml-4 list-disc">
            <li className='font-medium text-base'>
              Request disclosure of the specific pieces of personal data we have collected.
            </li>
            <li className='font-medium'>
              Request deletion of personal data we have collected.
            </li>
            <li className='font-medium'>
              Request that we do not sell your personal data.
            </li>
          </ul>
          <p className="mb-2 text-lg font-medium">
            We will respond to such requests within one month. Please contact us to exercise your rights.
          </p>
        </section>

        <section className="space-y-2">
          <p className="font-semibold">
            Octopus Game Studio does not collect, store, or process any data related to gambling. No real-world money transactions are involved in any of our games, and all in-game coins hold no real monetary value.
          </p>
          <p className="font-semibold">
            Our games are purely for entertainment purposes, and we do not solicit or require any payments from users.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
