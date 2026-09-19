"use client"
import { Accordion, Button, Card, Stack, Text, Title } from '@mantine/core'
import Reveal from '../Layout/Reveal'
import Link from 'next/link'

const items = [
    {
        title: "What services does Astack Innovatives offer?",
        text: "Astack provides end-to-end business transformation solutions, including Branding & Creative, Experience Design, Technology Development, Artificial Intelligence, Digital Marketing, and Digital Transformation Consulting. We help businesses create impactful brands, scalable digital products, and measurable growth strategies.",
    },
    {
        title: "Do you work with startups as well as large enterprises?",
        text: "Yes, our flexible frameworks allow us to partner effectively across the board. For startups, we focus on speed-to-market, building MVPs, and establishing early-stage branding. For enterprises, we emphasize scalability, deeply integrated systems, data privacy, and optimizing legacy workflows.",
    },
    {
        title: "Can Astack handle complete digital transformation projects?",
        text: "Absolutely. We specialize in comprehensive digital shifts. This includes auditing your current ecosystem, modernizing legacy systems, introducing automation and AI-driven workflows, training your team on new platforms, and shifting your operations securely to modern cloud structures.",
    },
    {
        title: "How does your project process work?",
        text: "We follow a 4-stage sprint methodology: 1. Discovery & Strategy (deep dive into goals), 2. Experience Design (wireframing and high-fidelity UI), 3. Agile Development & AI Integration (iterative builds and robust testing), and 4. Deployment & Growth (launch support and ongoing performance optimization).",
    },
    {
        title: "Which industries do you work with?",
        text: "Our core expertise spans FinTech, HealthTech, E-commerce, Logistics, SaaS, and EdTech platforms. However, because our design and technology paradigms are universal, we build powerful, bespoke business applications for practically any complex vertical.",
    },
    {
        title: "How can I start a project with Astack?",
        text: "The easiest way is to click the 'Contact Us' button right here on our page to schedule an initial discovery call. From there, we will discuss your immediate challenges, draft a scoped technical proposal, outline timelines, and align on a budget that fits your project scope.",
    },
];

export default function FAQ() {
    return (
        <section className="sec-block">
            <div className="container">
                <div className="row g-3">
                    <Reveal className="col-md-5">
                        <Stack h="100%" justify="space-between">
                            <div className="title">
                                <h2>FAQ</h2>
                                <p>Explore our FAQs for clarity on our approach, services, and results. And if you don’t see your answer, we’re just a call away.</p>
                            </div>
                            <Card
                                withBorder
                                shadow='md'
                                h="auto"
                            >
                                <Stack align='start' gap={10}>
                                    <Title order={3} fz="lg">
                                        Didn't Find Your Answer?
                                    </Title>
                                    <p>
                                        We'd love to help. Book a call with our team and get answers tailored to your specific needs.
                                    </p>
                                    <Button
                                        component={Link}
                                        href="/contact"
                                        color='black'
                                    >
                                        Contact Us
                                    </Button>
                                </Stack>
                            </Card>
                        </Stack>
                    </Reveal>
                    <Reveal className="col-md-7">
                        <Accordion variant="contained" defaultValue="0">
                            {items.map((item, i) =>
                                <Accordion.Item key={i} value={`${i}`}>
                                    <Accordion.Control>{item.title}</Accordion.Control>
                                    <Accordion.Panel>{item.text}</Accordion.Panel>
                                </Accordion.Item>
                            )}
                        </Accordion>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}