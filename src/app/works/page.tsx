import Bottom from "@/components/Common/Bottom";
import Hero from "@/components/Common/Hero";
import FAQ from "@/components/Home/FAQ";
import OurClients from "@/components/Home/OurClients";
import FeaturedProject from "@/components/Works/FeaturedProject";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: `Works | Astack Innovatives PVT Ltd`,
};

export default function Page() {
    return (
        <section data-nav-fixed>
            <Hero
                image="/assets/images/works-cover.png"
                top="Ideas Crafted"
                title="Experiences Delivered."
                text="Explore a curated collection of branding, digital products, websites, and technology solutions we've created to help businesses innovate, grow, and stand out."
            />
            <FeaturedProject />
            <OurClients />
            <FAQ />
            <Bottom />
        </section>
    )
}