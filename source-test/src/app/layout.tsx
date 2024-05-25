import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import ProgessWrapper from "./lib/progress.wrapper";
import "./global.css";
import TanstackProvider from "./lib/tanstack.wrapper";
import GlobalContextProvider from "./lib/context.wrapper";
import AppBody from "./components/global/app.body";
import Script from "next/script";
import { idJsonObject } from "./utils/data/fakeData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Ecommerce with Next.Js",
  openGraph: {
    title: "PStore",
    description: "PStore application with NextJs",
    type: "website",
    images: [
      `https://img.freepik.com/premium-photo/photocomposition-horizontal-shopping-banner-with-woman-big-smartphone_23-2151201773.jpg`,
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <ProgessWrapper>
            <TanstackProvider>
              <GlobalContextProvider>
                <AppBody />
                {children}
              </GlobalContextProvider>
            </TanstackProvider>
          </ProgessWrapper>
        </AntdRegistry>
      </body>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(idJsonObject) }}
      />
    </html>
  );
}
