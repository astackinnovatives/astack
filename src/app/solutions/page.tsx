import Bottom from "@/components/Common/Bottom";
import Hero from "@/components/Common/Hero";
import FAQ from "@/components/Home/FAQ";
import OurClients from "@/components/Home/OurClients";
import All from "@/components/Solutions/All";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: `Solutions | Astack Innovatives PVT Ltd`,
};

export default function Page() {
    return (
        <section data-nav-fixed>
            <Hero
                image="/assets/images/about-cover.jpg"
                top="Ideas, Experiences & Technology"
                title="Built to Move Businesses Forward."
                text="From building powerful brands to creating digital experiences and intelligent technology, we help businesses transform, grow, and stay ahead."
            />
            <All />
            <OurClients />
            <FAQ />
            <Bottom />
        </section>
    )
}