import { ReactNode } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";

type LayoutProps = {
  children: ReactNode;
  title?: string;
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  title = "Foreveryou",
}: LayoutProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content="Foreveryou retail project" />

        <link
          rel="preload"
          href={
            "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          as={"image"}
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-253480078-1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-253480078-1');
          `,
          }}
        />

        {/* Remixicon Icon */}
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />

        {/* Tailwind CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />

        {/* Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />

        {/*         <link
          href="/assets/libs/swiper/swiper-bundle.min.css"
          rel="stylesheet"
          type="text/css"
        /> */}
      </Head>
      <div className={inter.className}>{children}</div>{" "}
    </>
  );
}
