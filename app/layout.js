import "./tokens.css";
import "./globals.css";

export const metadata = {
  title: "AI Master Template",
  description: "Built by Salman",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}