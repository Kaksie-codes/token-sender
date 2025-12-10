import Provider from "@/providers/Provider";
import "./globals.css";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';

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
          <ConnectButton />
          {children}
        </Provider>
      </body>
    </html>
  );
}
