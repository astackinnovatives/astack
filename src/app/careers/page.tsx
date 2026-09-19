import CurrentOpenings from "@/components/Careers/CurrentOpenings";
import ImageWrapper from "@/components/Careers/ImageWrapper";
import Bottom from "@/components/Common/Bottom";
import Hero from "@/components/Common/Hero";
import FAQ from "@/components/Home/FAQ";
import OurClients from "@/components/Home/OurClients";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: `Careers | Astack Innovatives PVT Ltd`,
};

export default function Page() {
    return (
        <section data-nav-fixed>
            <Hero
                image="/assets/images/works-cover.png"
                top="We’re hiring"
                title="Build the Future With Us."
                text="We're looking for passionate people to join us on our mission. We value flat hierarchies, clear communication, and full ownership and responsibility."
            />
            <ImageWrapper />
            <CurrentOpenings />
            <OurClients />
            <FAQ />
            <Bottom />
        </section>
    )
}