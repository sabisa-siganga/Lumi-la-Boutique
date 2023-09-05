import React from "react";
import { Container } from "react-bootstrap";

function Legal() {
  return (
    <>
      {/* The container component containing legal info about the Lumi La Boutique to display on the legal page */}
      <Container className=" legal-container  py-4">
        <h4 className="mb-5">Legal Page: Lumi La Boutique</h4>
        <h6 className="mb-3">1. Terms and Conditions:</h6>
        <h6 className="mb-2">1.1 Acceptance of Terms:</h6>
        <p className="mb-3">
          Welcome to our Lumi La Boutique.By accessing or using our website,you
          agree to comply with and be bound by these Terms and Conditions.
          <br />
          If you do not agree with these terms, please do not use our website.
        </p>
        <h6 className="mb-2">1.2 Changes to Terms:</h6>
        <p className="mb-4">
          We reserve the right to modify, update, or change these Terms and
          Conditions at any time without prior notice.
          <br />
          It is your responsibility to review this page periodically for any
          changes.
        </p>

        <h6 className="mb-3">2. Privacy Policy:</h6>
        <h6 className="mb-2">2.1 Information Collection:</h6>
        <p className="mb-3">
          We collect and store personal information as described in our Privacy
          Policy.
          <br />
          By using our website, you consent to the collection, use, and sharing
          of your information as outlined in the Privacy Policy.
        </p>
        <h6 className="mb-2">2.2 Cookies:</h6>
        <p className="mb-4">
          We may use cookies and similar technologies to improve your browsing
          experience.
          <br />
          You can manage your cookie preferences through your browser settings..
        </p>

        <h6 className="mb-3">3. Shipping and Returns:</h6>
        <h6 className="mb-2">3.1 Shipping Information:</h6>
        <p className="mb-3">
          Please review our Shipping Policy to understand our shipping methods,
          delivery times, and associated costs.
        </p>
        <h6 className="mb-2">3.2 Returns and Exchanges:</h6>
        <p className="mb-4">
          Refer to our Returns and Exchanges Policy for details on how to return
          or exchange items purchased from our website.
        </p>

        <h6 className="mb-3">4. Intellectual Property:</h6>
        <h6 className="mb-2">4.1 Trademarks and Copyrights:</h6>
        <p className="mb-4">
          All content, logos, images, and trademarks on this website are the
          property of Lumi La Boutique and protected by intellectual property
          laws.
          <br />
          Any use without our written consent is prohibited.
        </p>

        <h6 className="mb-3">5. Dispute Resolution:</h6>
        <h6 className="mb-4">5.1 Arbitration Agreement:</h6>
        <p>
          Any disputes arising from your use of our website will be resolved
          through binding arbitration.
          <br />
          By using our website, you agree to waive your right to bring a lawsuit
          in court.
        </p>

        <h6 className="mb-3">6. Limitation of Liability</h6>
        <h6 className="mb-2">Limitation of Liability</h6>
        <p className="mb-4">
          We make every effort to ensure the accuracy of the information on our
          website.
          <br />
          However, we are not liable for any errors, omissions, or damages
          resulting from the use of our website.
        </p>

        <h6 className="mb-2">7. Contact Information:</h6>
        <p className="mb-2">
          If you have any questions or concerns regarding our legal page or any
          other aspect of our website, please contact us at:
        </p>
        <p className="mb-2">Email: lumilaboutique@gmail.com</p>
        <p className="mb-2"> Tel: (041) 346 7865</p>
        <p className="mb-2">Our Headquarters:</p>
        <p className="mb-1">Lakeside str., Alberton</p>
        <p className="mb-1"> Johannesburg, 1449</p>
        <p className="mb-1 pb-5">Gauteng </p>
      </Container>
    </>
  );
}

export default Legal;
