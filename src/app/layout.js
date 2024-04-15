
import "./globals.css";



export const metadata = {
  title: "Sahara Insurance Agency",
  description: "Sahara Insurance Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
