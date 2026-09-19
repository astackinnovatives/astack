import Bottom from "@/components/Common/Bottom";
import FAQ from "@/components/Home/FAQ";
import OurClients from "@/components/Home/OurClients";
import Reveal from "@/components/Layout/Reveal";
import { works } from "@/components/Works/Data";
import Hero from "@/components/Works/Hero";
import KeyFeatures from "@/components/Works/KeyFeatures";
import SecOne from "@/components/Works/SecOne";
import SecThree from "@/components/Works/SecThree";
import SecTwo from "@/components/Works/SecTwo";
import Technology from "@/components/Works/Technology";
import TheOutcome from "@/components/Works/TheOutcome";
import { Button, Group, Image } from "@mantine/core";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

async function get(params: Props["params"]) {
    const { id } = await params;
    return works.find((project) => project.id === id);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const item = await get(params);
    return {
        title: `${item?.hero.title ?? 'Works'} | Astack Innovatives PVT Ltd`,
    }
};

export function generateStaticParams() {
    return works.map(({ id }) => ({ id }));
}

export default async function Page({ params }: Props) {
    const item = await get(params);
    if (!item) notFound();

    return (
        <section data-nav-fixed>
            <Hero item={item} />

            <div className="container">
                <div className="row g-3 justify-content-center">
                    <Reveal className="col-md-12" animation="zoom-in">
                        <Image
                            src={`/assets/images/works/${item.hero.image}`}
                            alt={item.hero.title}
                            radius="xl"
                        />
                    </Reveal>
                    <Reveal className="col-md-12">
                        <Group justify="space-between">
                            {item.hero.chip.map((item) =>
                                <Button variant="outline" radius="xl" key={item}>
                                    {item}
                                </Button>
                            )}
                        </Group>
                    </Reveal>
                </div>
            </div>
            <SecOne item={item} />
            <SecTwo item={item} />
            <KeyFeatures item={item} />
            <SecThree item={item} />
            <Technology item={item} />
            <TheOutcome item={item} />
            <OurClients />
            <FAQ />
            <Bottom />
        </section>
    )
}