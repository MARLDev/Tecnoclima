import ContactoCat from "../Components/Contacto/ContactoCat";
import ContactoEs from "../Components/Contacto/ContactoEs";
import { useLanguage } from "../Context/LanguageContext";
import "./Contact.css";

const Contact = () => {
  const { language } = useLanguage();
  return (
    <div id="contact">
      {language === "castellano" ? (
        <div className="contact-page">
          <ContactoEs />
        </div>
      ) : (
        <div className="contact-page">
          <ContactoCat />
        </div>
      )}
    </div>
  );
};

export default Contact;
