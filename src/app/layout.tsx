import "./globals.css";
import Header from "../components/Header";
import { ReduxProvider } from "./providers/redux-provider";
import React from "react";
export const metadata = {
  title: "Tracker App",
  description: "All rights reserved.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={` min-h-screen flex flex-col bg-gray-50 text-gray-900`}>
        <ReduxProvider>
          <Header />
          <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-6">
            {children}
          </main>
          <footer className="w-full border-t py-4 text-sm text-center text-gray-500">
            &copy; {new Date().getFullYear()} Tracker App. All rights reserved.
          </footer>
        </ReduxProvider>
      </body>
    </html>
  );
}
