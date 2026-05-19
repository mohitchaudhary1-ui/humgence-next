import Image from "next/image";
import Banner from "./components/Banner";
import AboutComponent from "./components/AboutComponent";
import ServicesComponent from "./components/ServicesComponent";
import HomeContactForm from "./components/ContactForm";
import VideoTestimonials from "./components/Testimonials";
import ClientsSliders from "./components/ClientsSliders";

export default function Home() {
  return (
    <>
    <main className="bg-black text-white overflow-x-hidden">
            <Banner />
            <AboutComponent />
            <ServicesComponent />
             <VideoTestimonials />
            <ClientsSliders />
            <HomeContactForm />
            </main>
    </>
  );
}
