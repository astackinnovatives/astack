import Bottom from "@/components/Common/Bottom";
import Hero from "@/components/Common/Hero";
import Cover from "@/components/Contact/Cover";
import Form from "@/components/Contact/Form";
import Links from "@/components/Contact/Links";
import FAQ from "@/components/Home/FAQ";
import Reveal from "@/components/Layout/Reveal";
import { Card, Divider, Group, ThemeIcon } from "@mantine/core";
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: `Contact Us | Astack Innovative`,
};

export default function Page() {
    return (
        <section>
            <Hero
                image="/assets/images/works-cover.png"
                top="Get in Touch"
                title="Let's Build What's Next."
                text="Have an idea, a challenge, or a business ready for its next stage? Let's talk about how Astack can turn your vision into meaningful impact."
            />
            <Cover />
            <section className="sec-block">
                <div className="container">
                    <div className="row g-3 justify-content-center">
                        <div className="col-md-6">
                            <Card
                                withBorder
                                shadow="md"
                            >
                                <Links />
                                <Divider my="md" />
                                <Group>
                                    <ThemeIcon
                                        color="black"
                                        size="lg"
                                        radius="xl"
                                    >
                                        <IconBrandInstagram stroke={1.5} />
                                    </ThemeIcon>
                                    <ThemeIcon
                                        color="black"
                                        size="lg"
                                        radius="xl"
                                    >
                                        <IconBrandFacebook stroke={1.5} />
                                    </ThemeIcon>
                                    <ThemeIcon
                                        color="black"
                                        size="lg"
                                        radius="xl"
                                    >
                                        <IconBrandLinkedin stroke={1.5} />
                                    </ThemeIcon>
                                </Group>
                            </Card>
                        </div>
                        <Reveal className="col-md-6">
                            <Card
                                withBorder
                                shadow="md"
                            >
                                <Form />
                            </Card>
                        </Reveal>
                    </div>
                </div>
            </section>
            <FAQ />
            <Bottom />
        </section>
    )
}
