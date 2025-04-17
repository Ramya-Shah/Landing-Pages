import Header from "@/components/Header";
import HeroSection from "./HeroSection";
import TopFaculty from "@/components/TopFaculty";
import TopRecruiters from "@/components/TopRecruiters";
import PlacementStories from "@/components/PlacementStories";
import CampusCulture from "@/components/CampusCulture";
import LifeAtDAU from "@/components/LifeAtDAU";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";
import SuccessStories from "@/components/SuccessStories";
import FacultyHighlights from "@/components/FacultyHighlights";
import NotableAwards from "@/components/NotableAwards";

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Header branchName="Ph.D."/>
            <section id="hero-section">
                <HeroSection />
            </section>
            <section id="faculty-highlights">
                <FacultyHighlights />
            </section>
            <section id="notable-awards">
                <NotableAwards />
            </section>
            <section id="top-recruiters">
                <TopRecruiters />
            </section>
            {/* <section id="placement-stories">
        <PlacementStories />
      </section>
      <section id="success-stories">
        <SuccessStories />
      </section>
      <section id="top-faculty">
        <TopFaculty />
      </section> */}
            <section id="campus-culture">
                <CampusCulture />
            </section>
            <section id="life-at-dau">
                <LifeAtDAU />
            </section>
            <section id="about-us">
                <AboutUs />
            </section>
            {/* <section id="contact-form">
                <CrmContact />
            </section> */}
            <section id="contact-form">
                <ContactForm redirectUrl="https://www.daiict.ac.in/admission-phd"/>
            </section>
            <section id="details">
                <Footer />
            </section>
        </main>
    );
}