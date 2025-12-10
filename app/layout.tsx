import Provider from "@/providers/Provider";
import "./globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Provider>
          <Header />
          <main className="w-full max-w-2xl mx-auto px-2 sm:px-4 py-4">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
