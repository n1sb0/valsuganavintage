"use client"
import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { api } from "../utils/api";

function RootLayout({
  children,
  session,
}: {
    session: Session;
  children: React.ReactNode;
}) {
  return (
    <>
      <html>
        <head></head>
        <body>
          <main>
          <SessionProvider session={session}>
          {children}
          </SessionProvider>
          </main>
        </body>
      </html>
    </>
  );
}

export default api.withTRPC(RootLayout);