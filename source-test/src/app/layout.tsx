import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import ProgessWrapper from "./lib/progress.wrapper";
import "./global.css";
import TanstackProvider from "./lib/tanstack.wrapper";
import GlobalContextProvider from "./lib/context.wrapper";
import AppBody from "./components/global/app.body";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Ecommerce with Next.Js",
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
    </html>
  );
}
