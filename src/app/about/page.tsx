import OurProcess from "@/components/About/OurProcess";
import OurTeam from "@/components/About/OurTeam";
import Touch from "@/components/About/Touch";
import VM from "@/components/About/VM";
import WhoWeAre from "@/components/About/WhoWeAre";
import Bottom from "@/components/Common/Bottom";
import Hero from "@/components/Common/Hero";
import FAQ from "@/components/Home/FAQ";
import OurClients from "@/components/Home/OurClients";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: `About | Astack Innovatives PVT Ltd`,
};

export default function Page() {
    return (
        <section data-nav-fixed>
            <Hero
                image="/assets/images/about-cover.jpg"
                top="Building Businesses"
                title="That Shape the Future."
                text="At Astack Innovatives, we combine branding, creativity, technology, and innovation to help ambitious businesses transform ideas into meaningful brands, exceptional digital experiences, and sustainable growth."
            />
            <Touch />
            <WhoWeAre />
            <VM />
            <OurProcess />
            <OurTeam />
            <OurClients />
            <FAQ />
            <Bottom />
        </section>
    )
}