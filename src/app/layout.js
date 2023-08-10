/**
 * Summary.
 *
 * Description. A layout is UI that is shared between routes.
 *
 * @link https://nextjs.org/docs/app/api-reference/file-conventions/layout
 */

import "@/styles/globals.css";

import Attribution from "@/components/attribution";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Frontend Mentor | Interactive card details form",
  description: "Built with React, Next.js, and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Attribution />
      </body>
    </html>
  );
}
