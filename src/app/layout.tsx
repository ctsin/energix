import "./globals.css";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import "../style/index.scss";
import AppProvider from "@/contextApi/AppProvider";
import { Toaster } from "sonner";
export const metadata = {
  title: "OffgridSynergy",
  description: "Your Trusted Sourcing Partner for Advanced Energy Products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="description"
            content="Your Trusted Sourcing Partner for Advanced Energy Products"
          />
          <meta name="robots" content="noindex, follow" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap"
            rel="stylesheet"
          ></link>
        </head>

        <body suppressHydrationWarning={true}>
          <AppProvider>
            {children}
            <Toaster position="top-center" richColors />
          </AppProvider>
        </body>
      </html>
    </>
  );
}
