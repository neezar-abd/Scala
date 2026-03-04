import Hero from '@/src/components/Hero';
import Stats from '@/src/components/Stats';
import About from '@/src/components/About';
import PageSpeed from '@/src/components/PageSpeed';
import Services from '@/src/components/Services';
import Marquee from '@/src/components/Marquee';
import Portfolio from '@/src/components/Portfolio';
import Team from '@/src/components/Team';
import Testimonials from '@/src/components/Testimonials';
import Contact from '@/src/components/Contact';
import Footer from '@/src/components/Footer';

export default function Home() {
    return (
        <main>
            <Hero />
            <Stats />
            <About />
            <PageSpeed />
            <Services />
            <Marquee />
            <Portfolio />
            <Team />
            <Testimonials />
            <Contact />
            <Footer />
        </main>
    );
}
