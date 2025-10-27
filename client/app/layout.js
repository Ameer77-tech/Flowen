import "./globals.css";
import outfit from "@/fonts/Outfit";
import ProgressBar from "@/components/ProgressBar";

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
