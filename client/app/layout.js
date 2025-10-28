import "./globals.css";
import outfit from "@/fonts/Outfit";
import ProgressBar from "@/components/ProgressBar";
import { metadata } from "@/lib/metaData";
import AppSideBar from "@/components/SideBar";

export { metadata };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="root">
      <body className={`${outfit.className} antialiased`}>
        <ProgressBar />
        {children}
      </body>
    </html>
  );
}
