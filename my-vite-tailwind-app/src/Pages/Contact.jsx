import ContactHeader from "../Components/ContactHeader";
import Faq from "../Components/Faq";
import Footer from "../Components/Footer";
import Map from "../Components/map";

function Contact() {
    return ( 
        <div>
            <ContactHeader/>           
            <Map/>
            <Faq/>
            <Footer/>
        </div>
     );
}

export default Contact;