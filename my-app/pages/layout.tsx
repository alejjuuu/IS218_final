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

        <link
          href="assets/css/style.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <div className={inter.className}>{children}</div>{" "}
    </>
  );
}
