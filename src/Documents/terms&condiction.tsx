
import Styles from "./terms.module.scss";

export function TermsAndConditions() {
  const termsContent = [
    {
      title: "Reservations",
      content:
        "Reservations are subject to availability. A booking request does not guarantee a table until confirmation has been provided by Al Forno."
    },

    {
      title: "Menu Information",
      content:
        "Menu items, prices and special offers may change without prior notice. We make every effort to keep information accurate and up to date."
    },

    {
      title: "Special Offers",
      content:
        "Promotions and special offers are subject to availability and may be withdrawn or changed at any time without notice."
    },

    {
      title: "Website Content",
      content:
        "All content displayed on this website, including text, images, logos and branding, is the property of Al Forno unless otherwise stated and may not be reproduced without permission."
    },

    {
      title: "External Links",
      content:
        "This website may contain links to third-party websites. Al Forno is not responsible for the content, availability or privacy practices of any external website."
    },

    {
      title: "Cookies",
      content:
        "By continuing to use this website and accepting our cookie notice, you agree to the use of cookies as described in our Privacy Policy."
    },

    {
      title: "Limitation of Liability",
      content:
        "While we make reasonable efforts to ensure the information on this website is accurate, Al Forno accepts no responsibility for errors, omissions or temporary service interruptions."
    },

    {
      title: "Changes to These Terms",
      content:
        "Al Forno reserves the right to update these Terms and Conditions at any time. Changes will be published on this page."
    },

    {
      title: "Contact",
      content:
        "If you have any questions regarding these Terms and Conditions, please contact Al Forno directly."
    }
  ];

  return (
    <div className={Styles.terms}>
      <h1>Terms & Conditions</h1>

      <p>Last updated: November 2026</p>

      <p>
        By accessing and using this website, you agree to these Terms &
        Conditions.
      </p>

      {termsContent.map((section, index) => (
        <section key={index}>
          <h2>{section.title}</h2>
          <p>{section.content}</p>
        </section>
      ))}
    </div>
  );
}