import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function Contact() {
    return (
        <div className="pt-16 pb-16 bg-[#01194A] ">
            <div className="grid grid-cols-1 xl:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10 mt-10">
            {/* Contact form */}
            <div>
                <ContactForm/>
            </div>
            {/* Contact Info */}
            <div>
                <ContactInfo/>
            </div>
            </div>
        </div>
    );
};