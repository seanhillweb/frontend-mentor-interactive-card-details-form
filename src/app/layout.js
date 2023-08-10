/**
 * Summary.
 *
 * Description. A layout is UI that is shared between routes.
 *
 * @link https://nextjs.org/docs/app/api-reference/file-conventions/layout
 */

import "@/styles/globals.css";

import Attribution from "@/components/attribution";

import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  weight: ["500"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Frontend Mentor | Interactive card details form",
  description: "Built with React, Next.js, and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        {children}
        <Attribution />
      </body>
    </html>
  );
}
