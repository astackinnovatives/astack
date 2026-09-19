import Bottom from "@/components/Common/Bottom";
import Branding from "@/components/Home/Branding";
import FAQ from "@/components/Home/FAQ";
import Hero from "@/components/Home/Hero";
import OurClients from "@/components/Home/OurClients";
import OurSolutions from "@/components/Home/OurSolutions";
import OurWorks from "@/components/Home/OurWorks";
import Testimonials from "@/components/Home/Testimonials";
import Transform from "@/components/Home/Transform";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: `Welcome to Astack Innovatives PVT Ltd`,
};

export default function Page() {
    return (
        <section data-nav-fixed>
            <Hero />
            <Transform />
            <Branding />
            <OurSolutions />
            <OurWorks />
            <OurClients />
            <Testimonials />
            <FAQ />
            <Bottom />
        </section>
    )
}