import { Inter } from "next/font/google";
import { Navbar } from "../../_components/Navbar";
import { DUNavbar } from "../../_components/DUNavbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DUNavbar></DUNavbar>
        {children}
      </body>
    </html>
  );
}
