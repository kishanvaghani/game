import React from 'react';

const ContactUs = () => {
  return (
    <div className="text-black sm:px-0 px-4 font-sans container mx-auto  p-8 min-h-screen">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
        <p className="text-lg">info@octopusgaming.com</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Copyright Concerns</h2>
        <p className="mb-4 text-lg font-semibold">
          At Octopus Gaming, we value and respect intellectual property rights. Many of the games available on our platform are either developed in-house or licensed directly from known copyright holders. However, some games, due to their general use across the internet or a lack of identifiable copyright information, may not have a traceable origin.
        </p>
        <p className="mb-4 text-lg font-semibold">
          In certain cases, we use games under specific conditions, ensuring that Octopus Gaming meets all prerequisite constraints as far as we have been able to determine.
        </p>
        <p className="mb-4 text-lg font-semibold">
          We do not modify the original source code of these games. All credit, brand names, or website references are retained as found in the original versions. If you believe that Octopus Gaming may be infringing on your copyright or other intellectual property rights, please let us know immediately by providing the following information:
        </p>

        <ol className="list-decimal font-medium list-inside space-y-4 pl-4">
          <li>
            Your electronic or physical signature as the IPR owner or an authorized representative.
          </li>
          <li>
            A description of the intellectual property right being infringed and an overview of the alleged infringement.
          </li>
          <li>
            The specific location of the unauthorized material on Octopus Gaming (e.g., the game page URL or a registered brand name documentation).
          </li>
          <li>
            A copy of the license granting you rights to enforce the IP if you are not the direct owner.
          </li>
          <li>
            Identification of the specific URL or other location on our site where the infringing material is located, with sufficient details to help us locate it.
          </li>
          <li>
            Your full name and contact details for follow-up communication.
          </li>
          <li>
            A statement affirming your genuine belief that the disputed use is unauthorized by the copyright owner, their agent, or the law.
          </li>
        </ol>

        <p className="mt-4 font-semibold text-lg">
          Please send the above details to <span className="text-blue-500">info@octopusgaming.com</span>. We will review your report and respond within 7 days. Our team is committed to promptly addressing any valid copyright concerns.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
