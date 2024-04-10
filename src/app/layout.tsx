import { UserProvider } from "@auth0/nextjs-auth0/client";
import { LocalizedStringProvider } from "react-aria-components/i18n";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Workout Planner",
  description: "Plan your workouts and track your progress.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="en" dir="ltr">
      <UserProvider>
        <body
          className={`${inter.className} flex flex-col h-full font-normal text-base leading-normal`}
        >
          <LocalizedStringProvider locale="en" />
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
