export type Work = {
    id: string;
    category: string[];
    hero: {
        title: string;
        cat: string;
        text: string;
        link: string;
        image: string;
        chip: string[];
    };
    secOne: {
        challenge: string[];
        solution: string[];
    };
    secTwo: {
        image: string;
        title: string;
        text: string[];
    };
    features: string[];
    secThree: {
        title: string;
        text: string[];
        chip: string[];
        textEnd: string;
    }[];
    technology: [string, string][];
    outcome: string[];
};

export const works: Work[] = [
    {
        id: `halsca`,
        category: [`Branding`, `Website`],
        hero: {
            title: `HALSCA`,
            cat: `Healthcare`,
            text: `Building a Digital Presence for a Modern Healthcare Brand`,
            link: ``,
            image: `db3163c2adfad1b1c908490dfccc1c2cf20ea824.jpg`,
            chip: [`UI/UX Design`, `Website Development`, `Responsive Design`, `CMS Development`, `SEO Optimization`,]
        },
        secOne: {
            challenge: [
                `HALSCA needed a modern digital platform that reflected its commitment to quality healthcare while making information easily accessible for patients, healthcare professionals, and partners.`,
                `The objective was to replace a traditional web experience with a fast, user-friendly website that builds trust and clearly communicates the organization's services and expertise.`,
            ],
            solution: [
                `We designed and developed a responsive website that combines clean design, intuitive navigation, and a powerful content management system.`,
                `The platform enables visitors to easily explore healthcare services, understand the organization's capabilities, and connect with the team through a seamless digital experience.`,
            ]
        },
        secTwo: {
            image: `7f99d4b85356f78c11b69812e9144924be70c209.jpg`,
            title: `Creating a Better User Experience`,
            text: [
                `Every page was designed with simplicity and accessibility in mind.`,
                `A well-structured navigation system allows users to quickly access important information, while the clean visual design creates a professional and trustworthy online presence.`,
                `The website delivers a consistent experience across desktop, tablet, and mobile devices.`,
            ]
        },
        features: [
            `Modern Healthcare Website`, `Responsive UI/UX`, `Custom Laravel CMS`,
            `Dynamic Content Management`, `Service Pages`, `Contact & Enquiry Forms`,
            `SEO Optimization`, `Secure Admin Panel`, `High Performance`,
        ],
        secThree: [
            {
                title: `Smart Content Management`,
                text: [
                    `Built with Laravel and a custom CMS, the platform allows the HALSCA team to manage website content without technical support.`,
                    `The CMS enables administrators to`,
                ],
                chip: [
                    `Update website pages`, `Manage healthcare services`, `Publish news and announcements`,
                    `Manage contact information`, `Update banners and media`,
                    `Add new content whenever required`,
                ],
                textEnd: `This ensures the website remains current and easy to maintain.`
            },
            {
                title: `Performance & Optimization`,
                text: [
                    `The website was developed with performance and usability as key priorities.`,
                    `Key improvements include:`,
                ],
                chip: [
                    `Fast Loading Pages`, `Mobile-Responsive Design`,
                    `SEO-Friendly Architecture`, `Optimized Images`,
                    `Secure backend`, `Easy Content Management`,
                ],
                textEnd: `Together, these features provide a smooth browsing experience while improving search visibility.`
            },
        ],
        technology: [
            [`Laravel`, `devicon-laravel-original colored`],
            [`PHP`, `devicon-php-plain colored`],
            [`MySQL`, `devicon-mysql-plain-wordmark colored`],
        ],
        outcome: [
            `The new HALSCA website delivers a modern, professional, and user-friendly digital experience that reflects the organization's healthcare vision.`,
            `Built using PHP, Laravel, and a Custom CMS, the platform simplifies content management, enhances user engagement, and provides a scalable foundation for future growth.`,
        ]
    },
    {
        id: `benair-group`,
        category: [`Branding`, `Website`],
        hero: {
            title: `Benair Group`,
            cat: `HVAC Solutions`,
            text: `Engineering a Digital Platform for Complete HVAC Solutions`,
            link: `https://benairgroup.com/`,
            image: `7895fc6239e50953776c8d7107b0fc3096fb07b4.jpg`,
            chip: [`UI/UX Design`, `Website Development`, `CMS Development`, `Responsive Design`, `SEO Optimization`]
        },
        secOne: {
            challenge: [
                `Benair Group is one of the UAE's leading HVAC solution providers, offering contracting, trading, duct manufacturing, and maintenance services. With multiple business divisions, product categories, and locations across the UAE, they needed a website that clearly presented their expertise while making it easy for customers to explore products and services.`,
            ],
            solution: [
                `We designed and developed a modern corporate website that showcases Benair's complete range of HVAC solutions through a clean structure, intuitive navigation, and engaging visuals.`,
                `The new platform helps customers easily discover products, explore business divisions, learn about completed projects, and connect with the Benair team for enquiries and quotations.`
            ]
        },
        secTwo: {
            image: `19d09c371dc2d0a19f4a4c0f2122349573ece964.jpg`,
            title: `Creating a Better User Experience`,
            text: [
                `The website was built with a user-first approach, making navigation simple for engineers, contractors, consultants, and customers.`,
                `Information is organized into dedicated sections for products, services, projects, company profile, and contact details, allowing visitors to find what they need quickly.`
            ]
        },
        features: [
            `Modern Corporate Website`, `Responsive Design`, `Product Showcase`,
            `Service Pages`, `Projects Gallery`, `Branch & Location Information`,
            `Contact & Quote Forms`, `SEO-Friendly Structure`, `Custom CMS`, `Fast Performance`,
        ],
        secThree: [
            {
                title: `Showcasing Complete HVAC Expertise`,
                text: [
                    `The platform highlights Benair's four major business divisions:`,
                ],
                chip: [
                    `HVAC Trading`, `HVAC Contracting`, `Duct Manufacturing`, `Service & Retrofit`,
                ],
                textEnd: `Each section presents detailed information about the company's capabilities, helping visitors understand Benair's end-to-end HVAC expertise.`
            },
        ],
        technology: [
            [`PHP`, `devicon-php-plain colored`],
            [`Codeigniter`, `devicon-codeigniter-plain colored`],
            [`MySQL`, `devicon-mysql-plain-wordmark colored`],
        ],
        outcome: [
            `The new Benair website strengthens the company's digital presence by presenting its HVAC expertise through a modern and professional online experience.`,
            `Built on PHP and CodeIgniter, the platform improves customer engagement, simplifies access to information, and provides a scalable foundation for Benair's continued growth across the UAE HVAC industry.`
        ]
    },
    {
        id: `oscar-event-management`,
        category: [`Branding`, `Website`],
        hero: {
            title: `Oscar Event Management`,
            cat: `Event Management`,
            text: `Simplifying Event Finance with a Smart Accounts Management System`,
            link: `https://oscareventmanagement.in/`,
            image: `d5ceff723b2dc5ff449a701d07e14d79b2109177.jpg`,
            chip: [`UI/UX Design`, `Dashboard Design`, `Reporting & Analytics`, `Custom Software Development`, `Financial Management System`,]
        },
        secOne: {
            challenge: [
                `Oscar Event Management handles multiple weddings and events at the same time, making it difficult to manage income, expenses, vendor payments, and client billing using manual processes.`,
                `The team needed a single platform to monitor financial activities, improve visibility, and simplify day-to-day accounting operations.`,
            ],
            solution: [
                `We developed a custom Accounts & Financial Management Module for Wedding Village that brings all financial activities into one centralized system.`,
                `The platform enables the team to manage payments, track expenses, monitor vendor accounts, generate invoices, and access real-time financial reports through an easy-to-use dashboard.`,
            ]
        },
        secTwo: {
            image: `f94a9d5730fb7cb0b1fa76c8bc32e361e3c26235.jpg`,
            title: `Designing for Simplicity`,
            text: [
                `The system was designed with a clean and intuitive interface, allowing users to quickly access financial information without complex workflows.`,
                `Key financial insights are displayed on a centralized dashboard, helping the management team make faster and more informed decisions.`,
            ]
        },
        features: [
            `Financial Dashboard`, `Income & Payment Tracking`, `Expense Management`,
            `Vendor Payment Management`, `Client Billing & Invoice Generation`, `Transaction History`,
            `Financial Reports & Analytics`, `Role-Based User Access`, `Notification & Payment Alerts`,
        ],
        secThree: [
            {
                title: `Better Financial Visibility`,
                text: [
                    `The dashboard provides a clear overview of:`,
                ],
                chip: [
                    `Total Revenue`, `Pending Payments`,
                    `Vendor Dues`, `Cash Flow`, `Monthly Financial Performance`,
                    `Event-wise Revenue`, `Recent Transactions`,
                ],
                textEnd: `This gives the management team complete visibility into business performance at any time.`
            },
            {
                title: `Smart Reporting`,
                text: [
                    `The reporting module enables the team to generate detailed financial reports, including:`
                ],
                chip: [
                    `Profit & Loss`, `Income Reports`, `Expense Reports`,
                    `Vendor Payments`, `Client Outstanding Reports`, `Cash Flow Reports`,
                    `Monthly & Yearly Financial Summaries`,
                ],
                textEnd: `Reports can be exported for easier sharing and record keeping.`
            },
        ],
        technology: [
            [`Vue Js`, `devicon-vuejs-plain colored`],
            [`PHP`, `devicon-php-plain colored`],
            [`Laravel`, `devicon-laravel-original colored`],
        ],
        outcome: [
            `The new financial management system transformed how Oscar Event Management handles event accounting.`,
            `By bringing revenue tracking, expense management, vendor payments, billing, and reporting into one platform, the business now enjoys faster financial operations, better decision-making, and improved operational efficiency.`,
        ]
    },
    {
        id: `prakkatt-films`,
        category: [`Branding`, `Website`],
        hero: {
            title: `Prakkatt Films`,
            cat: `Media & Entertainment`,
            text: `Bringing Stories to Life Through a Premium Digital Experience`,
            link: `https://prakkatfilms.com/`,
            image: `76c97e48eeb579cc443ced9d3f194ae472f23749.jpg`,
            chip: [`Website Design & Development`, `Performance Optimization`, `SEO Optimization`,]
        },
        secOne: {
            challenge: [
                `Prakkatt Films required a modern website that truly reflected its creative vision and cinematic excellence. The goal was to create a premium digital platform that showcases films, documentaries, advertisements, and other creative projects while delivering a seamless experience across all devices.`,
                `The website also needed to strengthen the brand's online presence with intuitive navigation, fast performance, and a visually immersive interface that highlights the company's storytelling expertise.`,
            ],
            solution: [
                `We designed and developed a visually engaging website that captures the essence of Prakkatt Films through a clean, cinematic, and modern design.`,
                `The platform presents the company's portfolio in an organized and immersive manner, allowing visitors to explore projects effortlessly. Every section was carefully designed to enhance user engagement while maintaining the brand's premium identity.`,
                `An integrated contact form enables potential clients and collaborators to easily connect with the team.`
            ]
        },
        secTwo: {
            image: `580689eac87fe536af26f435a6252c8ed8dc6c39.jpg`,
            title: `Design Approach`,
            text: [
                `The website was designed with a strong focus on visual storytelling.`,
                `Minimalistic layouts, high-quality imagery, and elegant typography ensure that every project receives maximum attention. The responsive design provides a consistent and engaging browsing experience across desktops, tablets, and mobile devices while reflecting the creative identity of Prakkatt Films.`,
            ]
        },
        features: [
            `Premium Cinematic UI/UX`, `Fully Responsive Design`, `Creative Portfolio Showcase`,
            `Smooth Navigation`, `Contact Form Integration`,
            `SEO Optimization`, `Cross-Browser Compatibility`, `Fast Loading Performance`,
            `Mobile-Optimized Experience`, `Modern Visual Storytelling`,
        ],
        secThree: [
            {
                title: `Development`,
                text: [
                    `The website was developed using Vue.js to deliver a fast, responsive, and interactive user experience. A lightweight PHP module was integrated to handle contact form submissions and email functionality, ensuring reliable communication between visitors and the Prakkatt Films team. The development approach prioritized performance, scalability, and clean architecture to provide a seamless browsing experience.`,
                ],
                chip: [],
                textEnd: ``
            },
            {
                title: `Performance & SEO`,
                text: [
                    `The website was optimized for speed, accessibility, and search engine visibility through:`
                ],
                chip: [
                    `Fast Loading Pages`, `Fully Responsive Design`, `SEO-Friendly URL Structure`,
                    `Optimized Images`, `Mobile-First Experience`, `Clean and Optimized Code`,
                    `Cross-Browser Compatibility`,
                ],
                textEnd: `These optimizations ensure a smooth user experience while improving the website's visibility across search engines.`
            },
        ],
        technology: [
            [`Vue Js`, `devicon-vuejs-plain colored`],
            [`PHP`, `devicon-php-plain colored`],
        ],
        outcome: [
            `The new Prakkatt Films website successfully represents the company's passion for visual storytelling and filmmaking excellence. With its modern design, responsive user experience, and optimized performance, the platform effectively showcases the brand's creative portfolio while strengthening its digital presence.`,
            `The website provides visitors with an engaging browsing experience, simplifies client communication, and establishes a strong foundation for showcasing future projects and expanding the company's online reach.`,
        ]
    },
    {
        id: `adoor-community-church`,
        category: [`Branding`, `Website`],
        hero: {
            title: `Adoor Community Church`,
            cat: `Religious Organization`,
            text: `Building a Digital Platform for Worship, Community & Spiritual Growth`,
            link: `https://www.adoorchurch.org/`,
            image: `625563de69d50063afec0050df7091b454204d3d.jpg`,
            chip: [`UI/UX Design`, `Website Development`, `CMS Development`, `Responsive Design`, `SEO Optimization`]
        },
        secOne: {
            challenge: [
                `Adoor Community Church wanted a modern digital platform that reflects its vision of building lives through biblical teaching and community worship. The website needed to communicate the church's ministries, worship services, leadership, and activities while providing a welcoming experience for members and new visitors alike.`
            ],
            solution: [
                `We designed and developed a responsive website that brings together the church's mission, ministries, worship schedules, events, and community initiatives in one easy-to-navigate platform.`,
                `The new website strengthens the church's online presence while making it easier for visitors to discover services, explore ministries, and stay connected with the church community.`
            ]
        },
        secTwo: {
            image: `d427f7cd4853e37bfc1c1a38c7f35f9bddb53b1d.jpg`,
            title: `Creating a Meaningful User Experience`,
            text: [
                `The platform was designed with a clean and intuitive interface that allows users to quickly access important information.`,
                `Whether visitors are looking for worship timings, church leadership, ministries, or upcoming events, the website offers a seamless browsing experience across desktop, tablet, and mobile devices.`
            ]
        },
        features: [
            `Modern Church Website`, `Responsive UI/UX`, `Dynamic Ministries`,
            `Events & Announcements`, `Gallery Management`, `Worship Schedule`,
            `Leadership Profiles`, `Contact & Location`, `SEO-Friendly Structure`,
        ],
        secThree: [
            {
                title: `Showcasing the Church's Ministries`,
                text: [
                    `The website highlights the church's diverse ministries and community activities, including:`,
                ],
                chip: [
                    `Malayalam Worship`, `English Worship`, `Junior Church`, `Youth Fellowship`,
                    `Intercessory Prayer`, `Love Feast`, `Church Leadership`, `Events & Gallery`,
                ],
                textEnd: `This structured approach helps members and first-time visitors easily understand the church's mission and activities.`
            },
            {
                title: `Smart Content Management`,
                text: [
                    `Built using PHP, Laravel, and a Custom CMS, the platform enables administrators to update content quickly and efficiently.`,
                    `The CMS allows the church team to manage:`
                ],
                chip: [
                    `Ministries`, `Events`, `Worship Timings`, `Gallery`,
                    `News & Announcements`, `Leadership Profiles`, `Website Content`,
                ],
                textEnd: `This ensures the website remains current without requiring technical expertise.`
            },
        ],
        technology: [
            [`PHP`, `devicon-php-plain colored`],
            [`Vue Js`, `devicon-vuejs-plain colored`],
        ],
        outcome: [
            `The new Adoor Community Church website provides a modern and engaging digital experience that reflects the church's mission of faith, worship, and community.`,
            `Built with PHP, Laravel, and a Custom CMS, the platform simplifies content management, improves accessibility, and enables members and visitors to stay connected with the church's ministries, worship services, and community initiatives.`
        ]
    },
    {
        id: `jbasc`,
        category: [`Branding`, `Website`],
        hero: {
            title: `Jai Bharath Arts & Science College`,
            cat: `Education`,
            text: `Engineering a Digital Platform for Complete HVAC Solutions`,
            link: `https://www.jbasc.ac.in/`,
            image: `6ae4c8c2b7934410a49a06a41d95c5ed00122ea4.jpg`,
            chip: [`UI/UX Design`, `Website Development`, `CMS Development`, `Content Management`, `SEO Optimization`,]
        },
        secOne: {
            challenge: [
                `Jai Bharath College wanted a website that better reflected its academic excellence and campus life. The existing website was difficult to manage and needed a fresh, modern look with improved navigation and mobile responsiveness.`,
                `The goal was to create a website that would help students, parents, faculty, and visitors easily access information while strengthening the college's online presence.`,
            ],
            solution: [
                `We designed and developed a modern, responsive website that combines attractive visuals with a simple user experience.`,
                `The website was built to showcase the college's courses, departments, faculty, campus facilities, events, and achievements in a clear and engaging way.`,
                `A custom Content Management System (CMS) allows the college team to update content without technical knowledge.`,
            ]
        },
        secTwo: {
            image: `26a7164a0a18c8aa389533569c8ef22763880f4b.jpg`,
            title: `Design Approach`,
            text: [
                `The website was designed with a clean layout and easy navigation, making information accessible in just a few clicks.`,
                `Every page was created to provide a consistent experience while highlighting the college's identity and academic strengths.`,
            ]
        },
        features: [
            `Modern UI/UX Design`, `Responsive Across All Devices`, `Custom CMS`,
            `Dynamic News & Events`, `Gallery Management`, `SEO Optimization`,
            `Faculty & Department Management`, `Fast Performance`,
        ],
        secThree: [
            {
                title: `Development`,
                text: [
                    `The frontend was developed using Vue.js and Nuxt.js to deliver a fast and responsive experience.`,
                    `A custom Laravel CMS was integrated to manage:`,
                ],
                chip: [
                    `News & Events`, `Departments`, `Faculty`,
                    `Courses`, `Website Content`, `Gallery`, `Announcements`,
                ],
                textEnd: `This gives the college complete control over website updates.`
            },
            {
                title: `Performance & SEO`,
                text: [
                    `The website was optimized for speed and search engines with`
                ],
                chip: [
                    `Fast loading pages`, `Mobile responsiveness`, `SEO-friendly URLs`,
                    `Optimized images`, `Google Analytics integration`, `Website Content`,
                ],
                textEnd: `These improvements help increase visibility and provide a better browsing experience.`
            },
        ],
        technology: [
            [`Next Js`, `devicon-nextjs-plain colored`],
            [`PHP`, `devicon-php-plain colored`]
        ],
        outcome: [
            `The new Jai Bharath College website provides a modern digital experience that reflects the institution's values and academic excellence.`,
            `With a responsive design, easy content management, and improved performance, the platform enables the college to communicate effectively with students, parents, and the wider community while supporting future growth.`,
        ]
    },
    {
        id: `sakhi-real-estate`,
        category: [`Branding`, `Website`],
        hero: {
            title: `Sakhi Real Estate`,
            cat: `Real Estate`,
            text: `Creating a Digital Destination for Premium Real Estate in the UAE`,
            link: `https://www.sakhirealestate.com/`,
            image: `8463948115ea19e288b73be29ad676860800bc9c.jpg`,
            chip: [`UI/UX Design`, `Website Development`, `Responsive Design`, `Content Management`, `SEO Strategy`,]
        },
        secOne: {
            challenge: [
                `Sakhi Real Estate wanted to strengthen its online presence with a modern website that showcases premium residential, commercial, and luxury properties across the UAE. The objective was to improve user experience while increasing visibility on search engines and generating quality property enquiries.`,
            ],
            solution: [
                `We developed a responsive real estate platform that combines elegant design with an SEO-driven content strategy. The website enables visitors to explore properties, learn about the company, and connect with real estate experts through an intuitive browsing experience.`,
                `Alongside the website, we implemented a comprehensive SEO strategy, including optimized page structures, metadata, keyword planning, and search-friendly URLs to improve online visibility.`,
            ]
        },
        secTwo: {
            image: `86cf8046cff066ca06384f45645bf7a4b2f46154.jpg`,
            title: `Designing the Experience`,
            text: [
                `The website was designed with simplicity and usability at its core.`,
                `A clean interface, intuitive navigation, and responsive layouts ensure visitors can easily browse residential, commercial, and luxury property listings across desktops, tablets, and mobile devices.`,
            ]
        },
        features: [
            `Modern UI/UX Design`, `Responsive UI/UX`, `SEO-Optimized Content`,
            `Property Showcase`, `Project Pages`, `Contact & Enquiry Forms`,
            `Custom CMS`, `Mobile-Friendly Design`, `Performance Optimization`,
        ],
        secThree: [
            {
                title: `SEO-Driven Growth`,
                text: [
                    `A key focus of the project was improving search engine visibility.`,
                    `The strategy included:`,
                ],
                chip: [
                    `SEO-friendly page architecture`, `Internal linking`,
                    `Optimized titles and meta descriptions`,
                    `Keyword-focused content`, `Search-friendly URLs`,
                    `Google Analytics integration`, `Mobile optimization`,
                ],
                textEnd: `This approach helps attract users searching for UAE real estate and investment opportunities.`
            },
            {
                title: `Content Strategy`,
                text: [
                    `Every major page was optimized to improve discoverability and user engagement, including:`
                ],
                chip: [
                    `Home`, `About Us`, `Projects`,
                    `Services`, `Contact`,
                ],
                textEnd: `Content was carefully structured to highlight Sakhi Real Estate's expertise in residential, commercial, and luxury properties while encouraging visitors to enquire about available properties.`
            },
        ],
        technology: [
            [`Vue Js`, `devicon-vuejs-plain colored`],
            [`Codeigniter`, `devicon-codeigniter-plain colored`],
            [`PHP`, `devicon-php-plain colored`],
        ],
        outcome: [
            `The new Sakhi Real Estate website delivers a modern digital experience that reflects the brand's premium positioning in the UAE property market.`,
            `By combining responsive design, optimized content, and a strong SEO strategy, the platform enhances online visibility, improves user engagement, and creates a solid foundation for generating qualified real estate enquiries and supporting long-term business growth.`,
        ]
    },
    {
        id: `tpa-apostolate`,
        category: [`Branding`, `Website`],
        hero: {
            title: `TPA Apostolate`,
            cat: `Religious Organization`,
            text: `Creating a Meaningful Digital Platform for Faith, Community & Service`,
            link: `https://tpapostolate.com/`,
            image: `4a38d5e6aa51d839f0f2d6d13c69ad4e6b71b092.jpg`,
            chip: [`UI/UX Design`, `Website Development`, `Responsive Design`, `CMS Development`, `SEO Optimization`,]
        },
        secOne: {
            challenge: [
                `TPA Apostolate required a modern digital platform that reflects its mission of faith, service, and community outreach. The existing digital presence needed a more engaging structure to communicate its ministries, events, spiritual resources, and activities while making information easily accessible to members and visitors.`,
            ],
            solution: [
                `We designed and developed a clean, responsive website that creates a welcoming digital experience for the faith community.`,
                `The platform brings together information about the organization's mission, ministries, events, news, and outreach programs, enabling visitors to stay connected and engaged from anywhere.`,
            ]
        },
        secTwo: {
            image: `b1528fe52e1f59eddf8aca2e87c8a46b8b785369.jpg`,
            title: `Designing for Engagement`,
            text: [
                `The website was designed with simplicity and accessibility at its core.`,
                `A clear navigation structure, thoughtful content hierarchy, and intuitive layouts help visitors quickly explore spiritual resources, announcements, upcoming events, and community initiatives.`,
                `The responsive design ensures a consistent experience across desktop, tablet, and mobile devices.`
            ]
        },
        features: [
            `Modern Responsive Website`, `User-Friendly Navigation`, `Dynamic Events Management`,
            `News & Announcements`, `Gallery Management`, `Custom CMS`,
            `Contact & Enquiry Forms`, `SEO Optimization`, `Secure Administration Panel`,
        ],
        secThree: [
            {
                title: `Content Management Made Easy`,
                text: [
                    `Built with PHP, Laravel, and a Custom CMS, the platform enables administrators to update website content without technical expertise.`,
                    `The CMS allows the team to manage:`,
                ],
                chip: [
                    `News & Announcements`, `Events & Programs`, `Ministries`,
                    `Gallery`, `Articles & Resources`, `Contact Information`,
                    `Website Content`,
                ],
                textEnd: `This ensures the website remains current and continues to serve the community effectively.`
            },
            {
                title: `Performance & Accessibility`,
                text: [
                    `The platform was developed with performance and usability in mind.`,
                    `Key improvements include:`,
                ],
                chip: [
                    `Fast Loading Pages`, `Mobile-Responsive Design`,
                    `SEO-Friendly Architecture`, `Optimized Images`,
                    `Secure Admin Panel`, `Easy Content Management`,
                ],
                textEnd: `These enhancements provide a seamless browsing experience while improving online visibility.`
            },
        ],
        technology: [
            [`Vue Js`, `devicon-vuejs-plain colored`],
            [`PHP`, `devicon-php-plain colored`],
        ],
        outcome: [
            `The new TPA Apostolate website serves as a central digital hub for the organization, making it easier for members and visitors to access information, participate in community activities, and stay connected with its mission.`,
            `Built using PHP, Laravel, and a Custom CMS, the platform delivers a modern, scalable, and easy-to-manage solution that supports the organization's continued growth and outreach.`,
        ]
    },
    {
        id: `jisco-marine`,
        category: [`Branding`, `Website`],
        hero: {
            title: `JISCO Marine`,
            cat: `Marine & Offshore Services`,
            text: `Navigating Digital Transformation for a Leading Marine & Offshore Services Provider`,
            link: `https://jiscomarine.com/`,
            image: `7cb7b25b913bbb161b3b8e8fd2d8db62a8d8ad47.jpg`,
            chip: [`UI/UX Design`, `Website Development`, `Responsive Design`, `CMS Development`, `SEO Optimization`,]
        },
        secOne: {
            challenge: [
                `JISCO Marine provides a wide range of marine and offshore solutions, including vessel chartering, technical management, logistics support, agency services, offshore catering, and consultancy. With such a diverse portfolio, the company needed a modern website that clearly communicates its expertise while building trust with clients across the global maritime industry.`,
            ],
            solution: [
                `We designed and developed a professional corporate website that showcases JISCO Marine's services, fleet, certifications, and operational capabilities through a clean, intuitive, and responsive digital experience.`,
                `The platform enables clients to easily explore services, learn about the company's expertise, view its fleet, and connect with the team for business enquiries.`,
            ]
        },
        secTwo: {
            image: `c46c03e40c3551f20182d53449eab85e048ac876.jpg`,
            title: `Creating a Better User Experience`,
            text: [
                `The website was built with a user-first approach, ensuring visitors can quickly navigate between services, company information, fleet details, and contact pages.`,
                `A modern interface, clear content structure, and responsive layouts provide a seamless experience across desktop, tablet, and mobile devices.`,
            ]
        },
        features: [
            `Modern Corporate Website`, `Responsive UI/UX`, `Fleet Showcase`,
            `Service Portfolio`, `Company Timeline`, `Certifications & Achievements`,
            `Gallery Management`, `Contact & Enquiry Forms`, `Custom CMS`, `SEO-Friendly Structure`,
        ],
        secThree: [
            {
                title: `Showcasing Marine Excellence`,
                text: [
                    `The platform highlights JISCO Marine's core capabilities, including:`,
                ],
                chip: [
                    `Marine & Offshore Services`, `Vessel Chartering`, `Agency Services`,
                    `Vessel Technical Management`, `Logistics Support`, `Offshore Catering`,
                    `Ship Management`, `Crewing Services`, `Marine Consultancy`,
                ],
                textEnd: `Each service is presented with clear information, helping clients understand the company's extensive capabilities and industry expertise.`
            },
            {
                title: `Performance & Content Management`,
                text: [
                    `Built using PHP and Laravel, the website delivers a secure, scalable, and high-performing experience.`
                ],
                chip: [],
                textEnd: `A custom CMS allows the JISCO Marine team to easily update services, fleet information, company news, certifications, galleries, and website content without technical assistance.`
            },
        ],
        technology: [
            [`PHP`, `devicon-php-plain colored`],
        ],
        outcome: [
            `The new JISCO Marine website strengthens the company's digital presence by delivering a professional online platform that reflects its expertise in marine and offshore operations.`,
            `With a responsive design, streamlined navigation, and scalable Laravel-based CMS, the platform improves customer engagement, showcases the company's capabilities, and supports future business growth in the global maritime industry.`
        ]
    },
    {
        id: `naturelite-paints`,
        category: [`Branding`, `Website`],
        hero: {
            title: `Naturelite Paints`,
            cat: `Paints & Coatings`,
            text: `Building a Sustainable Digital Experience for Eco-Friendly Paint Solutions`,
            link: `https://naturelitepaints.com/`,
            image: `a7059e431024ff7896ad1115a026329dfa911e29.jpg`,
            chip: [
                `UI/UX Design`, `Content Management`, `Product Catalogue`, `API Integration`,
                `SEO Optimization`, `Responsive Web Development`,
            ]
        },
        secOne: {
            challenge: [
                `Naturelite Paints needed a modern digital platform that could effectively communicate its focus on eco-friendly paints, sustainability, health, and high-performance coating solutions.`,
                `With a diverse product portfolio covering interior and exterior emulsions, speciality products, wood and metal coatings, construction chemicals, putty, and primers, the website needed to make product discovery simple and engaging for customers, architects, designers, builders, and other professionals.`,
                `The goal was to create a modern website that strengthened the Naturelite brand while clearly communicating its sustainability initiatives, product benefits, applications, and commitment to healthier spaces.`,
            ],
            solution: [
                `We designed and developed a modern, responsive website that brings together Naturelite's brand story, sustainability vision, product portfolio, and customer-focused information in a clear and engaging experience.`,
                `The website presents Naturelite as an eco-conscious coatings brand, highlighting areas such as low VOC, low odour, responsible formulations, environmental responsibility, and healthier living environments.`,
                `A structured product catalogue allows visitors to browse products by category and explore individual product details, performance features, health and environmental advantages, available pack sizes, and finishes.`,
                `A PHP-based Mail API was integrated to handle website enquiry and contact form submissions.`,
            ]
        },
        secTwo: {
            image: `deb70a80f70c0cf43ec082ced155109186c6745f.jpg`,
            title: `Design Approach`,
            text: [
                `The website follows a clean, modern, and nature-inspired visual approach that reflects Naturelite's positioning around sustainability and responsible living.`,
            ]
        },
        features: [
            `Modern UI/UX Design`, `Fully Responsive Website`, `Nuxt.js Development`,
            `Dynamic Product Catalogue`, `Product Category Navigation`, `Product Detail Pages`,
            `Product Search`, `Sustainability & Brand Storytelling`, `Contact & Enquiry Forms`,
            `PHP Integration`, `SEO Optimization`, `Fast Performance`,
        ],
        secThree: [
            {
                title: `Development`,
                text: [
                    `The frontend was developed using Nuxt.js & PHP to create a fast, responsive, and scalable website experience.`,
                    `The development focused on:`
                ],
                chip: [
                    `Responsive frontend development`, `Product detail pages`,
                    `Dynamic product catalogue`, `Product category filtering`,
                    `Contact and enquiry forms`, `PHP Mail API integration`,
                    `SEO-friendly page structure`, `Cross-device compatibility`,
                    `Performance optimization`,
                ],
                textEnd: ``
            },
            {
                title: `Performance & SEO`,
                text: [
                    `The website was developed with a focus on speed, usability, mobile responsiveness, and search-friendly content structure.`,
                    `Key optimization areas include:`,
                ],
                chip: [
                    `Fast-loading pages`, `Responsive design`,
                    `SEO-friendly URLs`, `Optimized images and assets`,
                    `Structured product content`, `Mobile-first experience`,
                    `Performance-focused frontend development`,
                ],
                textEnd: ``
            },
        ],
        technology: [
            [`Nuxt`, `devicon-nuxt-plain-wordmark colored`],
            [`PHP`, `devicon-php-plain colored`],
        ],
        outcome: [
            `The new Naturelite Paints website provides a modern digital experience that reflects the brand's commitment to eco-friendly paints, sustainability, health, and responsible living.`,
            `The structured product catalogue makes it easier for users to discover and understand Naturelite's range of coating solutions, while the responsive frontend provides a consistent experience across devices.`,
            `The platform creates a stronger digital presence for Naturelite and provides a scalable foundation for showcasing its products, sustainability initiatives, projects, news, and future offerings.`,
        ]
    },
    // {
    //     id: ``,
    //     category: [`Branding`, `Website`],
    //     hero: {
    //         title: ``,
    //         cat: ``,
    //         text: ``,
    //         link: ``,
    //         image: ``,
    //         chip: [``, ``, ``, ``, ``,]
    //     },
    //     secOne: {
    //         challenge: [
    //             ``,
    //         ],
    //         solution: [
    //             ``,
    //         ]
    //     },
    //     secTwo: {
    //         image: ``,
    //         title: ``,
    //         text: [
    //             ``,
    //         ]
    //     },
    //     features: [
    //         ``,
    //     ],
    //     secThree: [
    //         {
    //             title: ``,
    //             text: [
    //                 ``,
    //             ],
    //             chip: [
    //                 ``, ``, ``,
    //             ],
    //             textEnd: ``
    //         },
    //         {
    //             title: ``,
    //             text: [
    //                 ``
    //             ],
    //             chip: [
    //                 ``, ``, ``,
    //             ],
    //             textEnd: ``
    //         },
    //     ],
    //     technology: [
    //         [``, ``],
    //     ],
    //     outcome: [
    //         ``
    //     ]
    // },
]