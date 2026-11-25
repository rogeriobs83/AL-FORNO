import Styles from "./privacy-policy.module.scss";



export function PrivacyPolicy() {
    const privacyPolicyContent = [
        {
            title: "Information We Collect",
            content: "When you contact us or make a reservation through our website, we may collect:",
            items: ["Name", "Email address", "Telephone number", "Reservation details"]
        },
        {
            title: "How We Use Your Information",
            content: "We use your information to:",
            items: ["Process reservations", "Respond to enquiries", "Provide customer support", "Improve our services"]
        },
        {
            title: "Data Protection",
            content: "We take reasonable measures to protect your information and do not sell or share personal data with third parties unless required by law."
        },
        {
            title: "Third-Party Services",
            content: "Our website may contain links to external services such as Google Maps and social media platforms. We are not responsible for the privacy practices of these external websites."
        },
        {
            title: "Contact",
            content: "If you have any questions regarding this Privacy Policy, please contact Al Forno directly."
        },
        {   title: "Cookies",
            content:  "Our website may use cookies to improve website functionality and user experience. Cookies help us remember preferences and understand how visitors use our website. By accepting the cookie notice displayed on our website, you consent to the use of cookies. You may disable cookies through your browser settings, although some website features may not function correctly."
        }
    ];
  return (
    <div className={Styles.privacyPolicy}>
      <h1>Privacy Policy</h1>
      <p>Last updated: November 2026</p>
      <p>At Al Forno, we are committed to protecting your privacy and personal information.</p>
      {privacyPolicyContent.map((section, index) => (
        <section key={index}>
          <h2>{section.title}</h2>
          <p>{section.content}</p>
          {"items" in section && section.items && (
            <ul>
              {section.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          )}
        </section>
      ))}

    </div>
  );
}