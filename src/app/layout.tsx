import type { Metadata } from "next";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@/css/globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Cursor from "@/components/Layout/Cursor";

export const metadata: Metadata = {
    title: `Astack`,
    description: `Transforming Businesses Through Branding, Technology & Innovation.`,
    icons: {
        icon: `/assets/images/fav.png`,
        shortcut: `/assets/images/fav.png`,
        apple: `/assets/images/fav.png`,
    },
    robots: {
        index: true,
        follow: true,
    }
};

const theme = createTheme({
    fontFamily: 'var(--font-1)',
    primaryColor: 'color',
    primaryShade: 3,
    colors: {
        color: [
            "#f2f7fb",
            "#d9e9f4",
            "#a9cde2",
            "#1a4869",
            "#ff005a",
            "#ff4d8d",
            "#ff8bb4",
            "#ffd6e6",
            "#5A6A75",
            "#3F3F3F"
        ]
    },
    fontSizes: {
        xs: '0.75rem',
        sm: '0.85rem',
        md: 'clamp(.9rem, 2vw, .95rem)',
        lg: 'clamp(1.1rem, 3vw, 1.2rem)',
        xl: 'clamp(1.5rem, 5vw, 1.75rem)',
        xxl: 'clamp(2rem, 7.5vw, 2.5rem)',
    },
    spacing: {
        xs: '0.5rem',
        sm: '0.75rem',
        md: '1rem',
        lg: '1.25rem',
        xl: 'calc(1rem + 1vw)',
        xxl: 'calc(1.5rem + 3vw)',
    },

    components: {
        Button: {
            defaultProps: {
                radius: `md`,
            },
            styles: {
                label: {
                    fontWeight: 300,
                    textTransform: `capitalize`,
                    // fontStyle: `italic`,
                },
            },
        },
        TextInput: {
            defaultProps: {
                size: "md",
            },
        },
        Select: {
            defaultProps: {
                size: "md",
            },
        },
        Textarea: {
            defaultProps: {
                size: "md",
            },
        },
    },
})

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap-grid.min.css"
                />
                <link
                    rel="stylesheet"
                    type='text/css'
                    href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
                />
            </head>
            <body>
                <MantineProvider theme={theme}>
                    <Cursor />
                    <Header />
                    {children}
                    <Footer />
                </MantineProvider>
            </body>
        </html>
    );
}
