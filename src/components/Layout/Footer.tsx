"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import css from "./Footer.module.css";
import Connect from "./Connect";
import ScrollTop from "./ScrollTop";
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandX, IconBrandYoutube, IconLocation, IconMailOpened, IconPhone } from "@tabler/icons-react";

const address = [
    {
        icon: "united-arab-emirates.png",
        title: "addit by astack",
        text: "Sharaf DG Metro Station Fahidi Heights, Office Suite 1200 Bur Dubai -Al Hamriya, UAE",
    },
    {
        icon: "indian-flag.png",
        title: "Astack Innovative Pvt. Ltd",
        text: "301/2A  - 4 th floor Regus Businesses Tower , Koramangala , Bangalore",
    },
    {
        icon: "indian-flag.png",
        title: "Astack Suburban",
        text: "Ascon Complex , Muvattupuzha",
    },
    {
        icon: "new-zealand.png",
        title: "astack",
        text: "21 A, Kenepuru Drive, Porirua Wellington, NZ",
    },
]

export default function Footer() {
    const [liveTime, setLiveTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const time = new Intl.DateTimeFormat("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
                timeZone: "Asia/Kolkata",
            }).format(new Date());

            setLiveTime(`${time} · IST`);
        };

        updateTime();

        const interval = setInterval(updateTime, 60_000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <footer className={css.footer}>
                <div className="container">
                    <div className="row g-3">
                        <div className="col-md-3">
                            <img
                                src="/assets/images/footer-logo.png"
                                alt="logo"
                                className={css.footerLogo}
                            />

                            <p>
                                Building brands, digital experiences, and intelligent technology solutions that help businesses grow, innovate, and lead.
                            </p>
                        </div>

                        <div className="col-md">
                            <h2>Quick Links</h2>
                            <Link
                                className={css.footerLink}
                                href="/"
                            >
                                Home
                            </Link>
                            <Link
                                className={css.footerLink}
                                href="/about"
                            >
                                About
                            </Link>
                            <Link
                                className={css.footerLink}
                                href="/works"
                            >
                                Works
                            </Link>
                            <Link
                                className={css.footerLink}
                                href="/career"
                            >
                                Career
                            </Link>
                            <Link
                                className={css.footerLink}
                                href="/contact"
                            >
                                Contact
                            </Link>
                        </div>

                        <div className="col-md">
                            <h2>Solutions</h2>
                            <Link
                                className={css.footerLink}
                                href="/"
                            >
                                Branding & Creative
                            </Link>
                            <Link
                                className={css.footerLink}
                                href="/"
                            >
                                Experience Design
                            </Link>
                            <Link
                                className={css.footerLink}
                                href="/"
                            >
                                Technology
                            </Link>
                            <Link
                                className={css.footerLink}
                                href="/"
                            >
                                Digital Marketing
                            </Link>
                        </div>

                        <div className="col-md">
                            <h2>Connect</h2>

                            <a
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                                className={css.footerLink}
                            >
                                <IconBrandInstagram stroke={1.5} /> Instagram
                            </a>

                            <a
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                                className={css.footerLink}
                            >
                                <IconBrandFacebook stroke={1.5} /> Facebook
                            </a>

                            <a
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                                className={css.footerLink}
                            >
                                <IconBrandLinkedin stroke={1.5} /> Linkedin
                            </a>
                        </div>

                        <div className="col-md-3">
                            <h2>Company</h2>

                            <a
                                href="tel:+919895251333"
                                className={css.footerLink}
                            >
                                <IconPhone stroke={1.5} /> +91 9895251333
                            </a>

                            <a
                                href="mailto:info@astack.co"
                                className={css.footerLink}
                            >
                                <IconMailOpened stroke={1.5} /> info@astack.co
                            </a>

                            <a href="#" className={css.footerLink}>
                                <IconLocation stroke={1.5} />
                                3rd Floor Geo Infopark Kinfra Industrial Complex Kakkanad, INDIA
                            </a>
                        </div>

                        <div className="col-md-12">
                            <h2>Address</h2>
                            <div className="row g-3">
                                {address.map((item, i) =>
                                    <div className="col-md-3" key={i}>
                                        <div className={css.footerAddress}>
                                            <img src={`/assets/images/icons/${item.icon}`} />
                                            <address>
                                                <h3>{item.title}</h3> {item.text}
                                            </address>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className={css.footerBottom}>
                        <span>
                            © {new Date().getFullYear()} Astack Innovative. All
                            rights reserved.
                        </span>

                        <span>{liveTime}</span>
                    </div>
                </div>
            </footer >

            <Connect />
            <ScrollTop />
        </>
    );
}